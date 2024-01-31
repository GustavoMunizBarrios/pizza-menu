import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1> Hello! </h1>;
}

// renderizing React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Strict mode will render all components twice */}
    <App />
  </React.StrictMode>
);

//renderazing React before 18
// React.render(<App />);
