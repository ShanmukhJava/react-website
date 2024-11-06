import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
