import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/navbars";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
