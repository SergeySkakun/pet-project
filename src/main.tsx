import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

function TestElement() {
  return (
    <div>
      <App />
      <div>Hello World</div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<TestElement />);
