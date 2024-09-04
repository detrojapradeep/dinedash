import React from "react";
import ReactDom from "react-dom/client";

const Heading = () => <h1 className="heading">This is testing the dinedash</h1>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Heading />);
