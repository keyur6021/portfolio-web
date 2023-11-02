import { Suspense } from "react";
import "./App.css";
import HomePage from "./components/main_content/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<> This is Lodding... </>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
