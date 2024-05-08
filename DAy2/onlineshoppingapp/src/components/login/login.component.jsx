import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="row border border-2 p-3 m-3">
      <div className="col-md-4">
        <label>
          Username : <input type="text" />{" "}
        </label>{" "}
        <br />
        <label>
          Password : <input type="password" />{" "}
        </label>{" "}
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            axios.get("http://localhost:3600/signin").then(res => {
              if (res.data.token) {
                sessionStorage["token"] = res.data.token;
                sessionStorage["isAuthenticated"] = true; // use context API

                navigate("/dashboard");
              }
            });
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
