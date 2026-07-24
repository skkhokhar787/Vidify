import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import VidiBar from "./Components/VidiBar";
import Dashboard from "./pages/Dashboard.jsx";
import { Route,Routes } from "react-router-dom";
import GenerateVideo from "./pages/GenerateVideo.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-col flex-1 min-w-0 h-full">
          <VidiBar />
          <Routes>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path = "/generate" element={<GenerateVideo/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;