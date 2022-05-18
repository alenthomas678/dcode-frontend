import "../css/Main.css";
import pc from "../assets/images/pc.png"; // with import

function Paperclip() {
  return (
    <div>
      <img className="paperclip" src={pc} alt="" />
    </div>
  );
}

export default Paperclip;
