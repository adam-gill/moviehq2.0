import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Results from "./pages/Results";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":query" element={<Results />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
