import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinments/Appoinment/Appoinment";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Login/SignUp/SignUp";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinments from "./Pages/Dashboard/MyAppoinments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinments></MyAppoinments>}></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route path="myhistory" element={<MyHistory></MyHistory>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
