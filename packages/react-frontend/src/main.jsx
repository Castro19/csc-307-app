import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./main.css";

// create the container
const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<MyApp />);
