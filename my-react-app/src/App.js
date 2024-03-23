import React from 'react';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather location="Latur" />
      <Weather location="Pune" />
      <Weather location="Mumbai" />
    </div>
  );
}

export default App;