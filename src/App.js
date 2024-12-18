import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState, useEffect } from "react";
import Alert from "./Components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [buttonText, setButtonText] = useState("Disable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#38495a"; // Default dark mode background
  }, []);

  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      setButtonText("Disable Dark Mode");
      document.body.style.backgroundColor = "#38495a";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("white");
      setButtonText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };

  return (
    <>
      <Router basename="/">
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          buttonText={buttonText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text to Analyze Below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
