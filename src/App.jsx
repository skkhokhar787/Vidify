import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import VidiBar from "./Components/VidiBar/VidiBar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-col flex-1 min-w-0 h-full">
          <VidiBar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;