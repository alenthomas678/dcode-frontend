import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import "../css/98.css";
import AuthContext from "../store/auth-context";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  var jsonData = {
    email: email,
    password: password,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await fetch(
        "https://dcode-backend-app.herokuapp.com/v1/auth/login",
        {
          method: "POST",
          body: JSON.stringify(jsonData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const response = await data.json();
      console.log(response);

      authCtx.login(response["token"]);

      setEmail("");
      setPassword("");
      setLoading(false);

      history.replace("/task1");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="centered-box">
      <div className="window" style={{ width: 400 }}>
        <div className="title-bar">
          <div className="title-bar-text">Chamber of Secrets</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body" style={{ padding: 5 }}>
          <form on onSubmit={submitHandler}>
            <div>
              <label>Email&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={emailChangeHandler}
              ></input>
            </div>
            <div>
              <label>Password&nbsp; </label>

              <input
                type="password"
                name="password"
                value={password}
                onChange={passwordChangeHandler}
              ></input>
            </div>
            <br></br>
            <button className="flying-button" type="submit">
              {isLoading ? "Loading..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
