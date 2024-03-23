import "./AdviceComponent.css";
import RollButton from "../images/icon-dice.svg";
import DividerDesk from "../images/pattern-divider-desktop.svg";
import { useState, useEffect } from "react";

export default function AdviceComponent() {
  const [adviceId, setAdviceId] = useState("-");
  const [advice, setAdvice] = useState("-");

  async function getData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceId(data.slip.id);
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainFrame">
      <h2>Advice #{adviceId}</h2>
      <p>{advice}</p>
      <img id="divideDesktop" src={DividerDesk} alt="Desktop screen divider" />
      <div className="outsideButton" role="button" onClick={getData}>
        <img src={RollButton} alt="Roll Button" />
      </div>
    </div>
  );
}
