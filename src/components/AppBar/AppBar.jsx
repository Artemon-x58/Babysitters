import { Navigation } from "../Navigation/Navigation";
export const AppBar = ({ isLoggedIn }) => {
  return (
    <header style={{ backgroundColor: "#f03f3b" }}>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
};
