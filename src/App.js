import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("./pages/login"));
const Admin = React.lazy(() => import("./pages/Admin"));
const Store1 = React.lazy(() => import("./pages/Store1"));
const Store2 = React.lazy(() => import("./pages/Store2"));
const Home = React.lazy(() => import("./pages/Home"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/store1" element={<Store1 />} />
      <Route path="/store2" element={<Store2 />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
