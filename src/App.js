import { Suspense } from "react";
import "./App.css";
import HomePage from "./components/main_content/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotionCard from "./components/MotionDemo.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<> This is Lodding... </>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/motion" element={<MotionCard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
