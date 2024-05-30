import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePostSignInMutation } from "../../context/userApi";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  let [signUp, { data, isLoading, isSuccess, isError }] =
    usePostSignInMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.token);
      navigate("/admin");
      toast.success("Welcome");
    }
    if (isError) {
      toast.error("The information was entered incorrectly");
    }
  }, [isSuccess, isError, data, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    signUp({ username, password });
  };

  return (
    <div className="login">
      <div className="container login__cont">
        <div className="login__content">
          <form onSubmit={handleSignUp}>
            <div className="login__input">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="login__input">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
