import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.component";

function App() {
  return (
    <div className="">
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
