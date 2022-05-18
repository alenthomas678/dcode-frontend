import "../css/Main.css";
import pc from "../assets/images/pc.png"; // with import

function Task1Hint() {
  return (
    <div>
      <img className="paperclip" src={pc} alt="" onClick={getHint} />
    </div>
  );
}

export default Task1Hint;
