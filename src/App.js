import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [btnText, setbtnText] = useState("Start");

  useEffect(() => {
    if (btnText === "Pause") {
      let interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [btnText, count]);

  const btnClick = () => {
    if (btnText === "Start") setbtnText("Pause");
    else setbtnText("Start");
  };
  return (
    <div className="App">
      <h1>Start Counter</h1>
      <span>{count}</span>
      <button style={{ marginLeft: "10px" }} onClick={btnClick}>
        {btnText}
      </button>
    </div>
  );
}
