import "../css/Todo.css";
import "../css/98.css";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Config from "../utils/Config";
import { PanZoom } from "react-easy-panzoom";

function Todo() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [value, setValue] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      sendRequest();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const sendRequest = async () => {
    try {
      const data = await fetch(`${Config.api_url}/tasks/questions/1`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      const response = await data.json();
      const question = response["question"];

      setQuestion(question);
    } catch (e) {
      alert(e);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    let jsonData = {
      answer: value,
    };
    try {
      const data = await fetch(`${Config.api_url}/tasks/answer/1`, {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      const response = await data.json();
      if (
        response["message"] === "RIGHT_ANSWER" ||
        response["message"] === "ALREADY_ANSWERED"
      ) {
        history.push("/task2");
      }
      setLoading(false);
      console.log(response);

      setValue("");
    } catch (e) {
      alert(e);
    }
  };

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="centered-box">
      <PanZoom autocenter="1">
        <div className="window" style={{ width: 400 }}>
          <div className="title-bar">
            <div className="title-bar-text">Chamber of secrets Level 1/7</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body" style={{ padding: 5 }}>
            <p>{question}</p>

            <form onSubmit={submitHandler}>
              <input
                id="text17"
                type="text"
                value={value}
                onChange={valueChangeHandler}
                style={{ marginRight: 5 }}
              />
              <button type="submit" style={{ marginTop: 15 }}>
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </PanZoom>
    </div>
  );
}

export default Todo;
