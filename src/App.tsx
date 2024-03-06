import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RoutePage from "./routes/RoutePage";
import LoginPage from "./components/login/LoginPage";
import LoginMobile from "./components/login/LoginMobile";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <LoginMobile />
    </div>
  );
}

export default App;
