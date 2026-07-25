import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import VidiBar from "./Components/VidiBar";
import Dashboard from "./pages/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import GenerateVideo from "./pages/GenerateVideo.jsx";
import Footer from "./Components/Footer.jsx";
import ViewVideo from "./pages/ViewVideo.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex flex-1 relative overflow-hidden">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <VidiBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/generate" element={<GenerateVideo />} />
            <Route path="/viewvideo" element={<ViewVideo />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
