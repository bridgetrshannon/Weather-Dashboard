import React from "react";
const api = {
  key: "c1d5301af636b9b6f1c8a7606fd79214",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
