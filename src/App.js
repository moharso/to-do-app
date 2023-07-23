import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ThemeProvider>
        <MainPage />
        </ThemeProvider>
  );
}

export default App;
