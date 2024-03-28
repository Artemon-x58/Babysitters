import { createGlobalStyle } from "styled-components";
import "../../fonts/stylesheet.css";

export const GlobalStyles = createGlobalStyle`
  


  body {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    background-color: #000;
    
    
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    outline: transparent;
    cursor: pointer;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: transparent;
  }
svg{
  cursor: pointer;
  
}
label {
  cursor: pointer;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

span {
  margin: 0;
}
`;
