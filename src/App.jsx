import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import VidiBar from "./Components/VidiBar";
import Dashboard from "./pages/Dashboard.jsx";

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