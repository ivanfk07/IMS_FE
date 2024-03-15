import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/additional-styles.css";
import "./css/tailwind-output.css";
import Login from "./components/login/Login";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
