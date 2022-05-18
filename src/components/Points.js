import { useContext } from "react";

import "../css/Main.css";
import ActivityContext from "../store/activity-context";

function Points() {
  const actCtx = useContext(ActivityContext);

  return (
    <div className="Points">
      <p>Points: {actCtx.score}</p>
    </div>
  );
}

export default Points;
