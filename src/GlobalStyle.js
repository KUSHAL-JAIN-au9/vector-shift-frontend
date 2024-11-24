import { createGlobalStyle } from "styled-components";

export const nodeStyles = {
  bg: "#1D0B47",
  border: "#FFF",
  header: "#430B8A",
  headerText: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #222;
    color: #333;
  }

  input, select {
    padding :6px;
    font-size: 14px;
    border: 1px solid #FFF;
    border-radius: 4px;
    width: -webkit-fill-available;
    margin-bottom: 8px;
    background-color: #430B8A
  }

  button {
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #430B8A;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1D0B47;
  }

  input[type="text"] {
  color: #FFF;
  }
`;
