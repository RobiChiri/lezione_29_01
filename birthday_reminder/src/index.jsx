import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const appElement = <App />;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(appElement);
