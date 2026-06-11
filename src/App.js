import { Suspense } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from "./components/main_content/PortfolioPage";

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen bg-bg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
