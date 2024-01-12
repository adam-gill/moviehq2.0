import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie:id"></Route>
            <Route path="/search:query"></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
