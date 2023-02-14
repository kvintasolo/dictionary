
import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
        <div className="container">
        <header className="App-header">
         
          <h1>Dictionary</h1>
        </header>
        <main>
       <Dictionary defaultKeyword ="sunset" />
       </main>
      <footer className="App-footer">
        This project was coded by <a href="https://serene-mandazi-45beb2.netlify.app/" target="_blank" rel="noreferrer"> Anna Stratanovych</a> and is  
        <a href="https://github.com/kvintasolo/dictionary" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


