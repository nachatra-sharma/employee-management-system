import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import CreateEmployee from "./pages/CreateEmployee";

const App = () => {
  return (
    <div className="p-4 w-[100%] h-[100%]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-employee" element={<CreateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
