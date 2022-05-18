import { useContext, useState } from "react";

import "../../css/Main.css";
import pc from "../../assets/images/pc.png";
import AuthContext from "../../store/auth-context";
import ActivityContext from "../../store/activity-context";
import Config from "../../utils/Config";

const Task6Hint = () => {
  const [isLoading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const actCtx = useContext(ActivityContext);

  const getHintHandler = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `${Config.api_url}/tasks/${actCtx.q6h1 ? 'hint2' : 'hint1'}/6`,
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
        actCtx.useQ6Hint1();
        alert(response[actCtx.q6h1 ? "hint2" : "hint1"]);
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

export default Task6Hint;
