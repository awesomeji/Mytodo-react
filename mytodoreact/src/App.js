import "./App.css";
import React, { useState } from "react";

import Todo from "./components/Todo";
import Calender from "./components/Calender";

function App() {
  


  return (
    <>
      <Calender />
      <Todo />
      <div className="diary-layout">
    
      </div>
    </>
  );
}

export default App;
