import React from 'react';
import "./_reset.scss";
import "./_base.scss";
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';


function App() {
  return (
    <div className="App__container">
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default App;
