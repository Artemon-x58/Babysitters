import { initializeApp } from "firebase/app";
import { getDatabase, query, ref, limitToFirst, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5aBo-xRqHvh6wPs9D4rngJbFt7q_X3C8",
  authDomain: "babysitters-b414b.firebaseapp.com",
  databaseURL:
    "https://babysitters-b414b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "babysitters-b414b",
  storageBucket: "babysitters-b414b.appspot.com",
  messagingSenderId: "1068081756422",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const babysittersRef = ref(db, "/babysitters");
const auth = getAuth();

export const getBabysittersListDB = async (currentPage, itemsPerPage) => {
  try {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const snapshot = await get(
      query(babysittersRef, limitToFirst(startIndex + itemsPerPage))
    );
    return snapshot.val();
  } catch (error) {
    console.error("Error fetching babysitters list:", error);
    return null;
  }
};
