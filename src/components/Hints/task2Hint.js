import { useContext, useState } from "react";

import "../../css/Main.css";
import pc from "../../assets/images/pc.png";
import AuthContext from "../../store/auth-context";
import Config from "../../utils/Config";

const Task2Hint = () => {
  const [isLoading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext)

  const getHintHandler = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `${Config.api_url}/tasks/hint1/2`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      );
      const response = await data.json();
      if (response["message"] === "SUCCESS") {
        alert(response["hint1"]);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e);
    }
  };

  return (
    <div>
      {!isLoading && (
        <img className="paperclip" src={pc} alt="" onClick={getHintHandler} />
      )}
      {isLoading && <h1 style={{ color: "red" }}>Loading Hint...</h1>}
    </div>
  );
};

export default Task2Hint;
