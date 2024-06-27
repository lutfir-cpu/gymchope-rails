import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Home from "./components/Home";
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <h1>GymChope</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home-page" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
