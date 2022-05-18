import "../css/Todo.css";
import "../css/98.css";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PanZoom } from "react-easy-panzoom";
import AuthContext from "../store/auth-context";
import Config from "../utils/Config";

function Todo5() {
  const [value, setValue] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const authCtx = useContext(AuthContext);

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
    const resp = await fetch(
      `${Config.api_url}/tasks/questions/5`,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
          `Bearer ${authCtx.token}`,
        },
      }
    );
    const response = await resp.json();

    const question = response["question"];

    setQuestion(question);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(value);

    setLoading(true);

    let data = {
      answer: value,
    };

    const resp = await fetch(
      `${Config.api_url}/tasks/answer/5`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
          `Bearer ${authCtx.token}`,
        },
      }
    );
    const response = await resp.json();
    setLoading(false);
    console.log(response);
    if (
      response["message"] === "RIGHT_ANSWER" ||
      response["message"] === "ALREADY_ANSWERED"
    ) {
      history.push("/task6");
    }

    setValue("");
  };

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="centered-box">
      <PanZoom autocenter="1">
        <div className="window" style={{ width: 400 }}>
          <div className="title-bar">
            <div className="title-bar-text">Chamber of secrets Level 5/7</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body" style={{ padding: 5 }}>
            <p className="question-p">
              {question}
              {/* QW4gQVJQIGNhY2hlIGlzIGEgY29sbGVjdGlvbiBvZiBBZGRyZXNzIFJlc29sdXRpb24gUHJvdG9jb2wgZW50cmllcyB0aGF0IGFyZSBjcmVhdGVkIHdoZW4gYW4gSVAgYWRkcmVzcyBpcyByZXNvbHZlZCB0byBhIE1BQyBhZGRyZXNzLiAKQW4gQVJQIGNhY2hlIGhhcyB0aGUgZGlzYWR2YW50YWdlIG9mIHBvdGVudGlhbGx5IGJlaW5nIHVzZWQgYnkgaGFja2VycyBhbmQgY3liZXIgYXR0YWNrZXJzLiAKQW4gQVJQIGNhY2hlIGhlbHBzIHRoZSBhdHRhY2tlcnMgaGlkZSBiZWhpbmQgYSBmYWtlIElQIGFkZHJlc3MuWW91IGNhbiBmaW5kIHRoZSBsb2NhbCBjYWNoZSBvbiB5b3VyIGRldmljZSB1c2luZyBjb25zb2xlIGNvbW1hbmRzIGFuZCBnZXQgbWFjIGFkZHJlc3NlcyBmb3IgSVAncy4KVGhlIG1hYyBhZGRyZXNzIGZvciAxNzIuMTYuMi4yIHdvdWxkIGJlLi4g */}
            </p>

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

export default Todo5;
