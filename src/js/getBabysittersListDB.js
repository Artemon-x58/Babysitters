import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

export const getBabysittersListDB = () => {
  return new Promise((resolve) => {
    const firebaseConfig = {
      authDomain: "babysitters-b414b.firebaseapp.com",
      databaseURL:
        "https://babysitters-b414b-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "babysitters-b414b",
      storageBucket: "babysitters-b414b.appspot.com",
      messagingSenderId: "1068081756422",
    };

    initializeApp(firebaseConfig);
    const db = getDatabase();
    const babysittersRef = ref(db, "/");

    onValue(babysittersRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
};
