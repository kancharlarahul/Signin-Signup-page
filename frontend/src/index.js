import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./app";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

