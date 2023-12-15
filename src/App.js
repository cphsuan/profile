import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbars from "./components/navbars";
import routes from "./pages/routes";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>{routes}</Routes>
      </Router>
    </>
  );
}

export default App;
