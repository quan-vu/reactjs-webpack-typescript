import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./components/App";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>, 
    document.getElementById("root")
);