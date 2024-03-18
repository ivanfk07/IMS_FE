import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/additional-styles.css";
import "./css/tailwind-output.css";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landingPage/LandingPage";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes path="/" >
          <Route path="/login" element={<Login />} />
          <Route path="/:company_name" element={<Navbar />} >
            <Route path="/:company_name" element={<LandingPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
