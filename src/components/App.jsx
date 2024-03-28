import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { AppBar } from "../components/AppBar/AppBar";
import { Hero } from "./Hero/Hero";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppBar />
      <Hero />
    </>
  );
};
