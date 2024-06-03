import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/additional-styles.css";
import "./css/tailwind-output.css";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landingPage/Summary";
import AssetList from "./components/assetList/AssetList";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes path="/" >
          <Route path="/login" element={<Login />} />
          <Route path="/:company_name" element={<Navbar />} >
            <Route path="/:company_name" element={<LandingPage />}/>
            <Route path="/:company_name/assets" element={<AssetList />}/>
            <Route path="/:company_name/" element={<LandingPage />}/>
            <Route path="/:company_name/" element={<LandingPage />}/>
            <Route path="/:company_name/" element={<LandingPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
