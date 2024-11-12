import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      navigate("/");
    }
    navigate('/home')
  };

  return (
    <>
      <div className="form">
        <img src="../src/assets/Seven Kids Code logo.png" alt="" />
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="forgot-password">
            <label>
              <input
                type="checkbox"
                name="Remember-Password"
                value="Remember Password"
              />{" "}
              Remember Password
            </label>
            <span>
              Forgot Password <a href="#">Click Here</a>{" "}
            </span>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <p> Privacy policy disclaimer </p>
      </div>
    </>
  );
};

export default Login;
