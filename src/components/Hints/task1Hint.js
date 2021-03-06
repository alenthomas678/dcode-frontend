import { useContext, useState } from "react";

import "../../css/Main.css";
import pc from "../../assets/images/pc.png";
import AuthContext from "../../store/auth-context";
import Config from "../../utils/Config";

const Task1Hint = () => {
  const [isLoading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const getHintHandler = async () => {
    setLoading(true);
    try {
      const data = await fetch(`${Config.api_url}/tasks/hint1/1`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      const response = await data.json();
      if (response["message"] === "SUCCESS") {
        alert("Hint:   " + response["hint1"]);
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
      {isLoading && (
        <img
          className="paperclip"
          src="https://images.vexels.com/media/users/3/131259/isolated/preview/a06c38cabdcb7a6761c740cfe16eb22b-loading-cursor-icon-by-vexels.png"
        />
      )}
    </div>
  );
};

export default Task1Hint;
