import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "../src/containers/App";
import * as serviceWorker from "./serviceWorker";

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

ReactDOM.render(<App title="Relevant persons" />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
