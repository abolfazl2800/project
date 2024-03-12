import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
