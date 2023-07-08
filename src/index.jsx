import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeAboutLight } from "./screens/HomeAboutLight";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeAboutLight />);
