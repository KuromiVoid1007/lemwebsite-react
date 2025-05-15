import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import News from "./pages/News";
import Profile from './pages/Profile';
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resetpassword" element={<ResetPassword/>}></Route>
        </Routes>
        
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
