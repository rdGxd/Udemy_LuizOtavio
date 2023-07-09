import { useLocation } from "react-router-dom";
import "./style.css";

export const About = () => {
  /*
  const location = useLocation();
  const { state } = location;
  */

  // Recebendo o estado via react-router-dom
  const { state } = useLocation();

  return (
    <div>
      <h1>Sobre</h1>
      <p>{state as string}</p>
    </div>
  );
};
