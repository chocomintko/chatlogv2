import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
