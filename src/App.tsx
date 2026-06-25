import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAF9] font-sans selection:bg-brand-purple-light selection:text-white">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:id" element={<GamePage />} />
        </Routes>

        <footer className="bg-white py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Games Interactive. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
