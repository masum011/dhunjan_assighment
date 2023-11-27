import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [visibility, setVisibility] = useState(false);
  const [userId, setuserId] = useState("");
  const [passowrd, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = () => {
    const payload = {
      username: userId,
      password: passowrd,
    };
    dispatch(fetchData(payload)).then((e) =>
      e.type === "admin/fetchData/fulfilled"
        ? navigate("/")
        : toast.warn("please fill first")
    );
  };
  return (
    <div>
      <div className="login-page">
        <div className="content">
          <p className="header">Venue Admin Login</p>
          <input
            type="text"
            id="inputfiled"
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
            placeholder="Username"
          />
          <br />
          <br />
          <div id="password_foeld">
            <span
              className="material-symbols-outlined"
              onClick={() => setVisibility(!visibility)}
            >
              visibility
            </span>
            <input
              type={visibility ? "text" : "password"}
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
              id="inputfiled"
              placeholder="Password"
            />
            <br />
            <br />
            <br />
          </div>
          <button id="signin-btn" onClick={handleSignIn}>
            Sign in
          </button>
          <p id="registration">New Registration?</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
