import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  // permite criar uma referência mutável que pode ser utilizada para acessar e manipular um elemento do DOM
  const timeout = useRef(0);
  // É utilizado para redirecionar a página
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      // Enviando o usuário para a HOME
      navigate("/");
    }

    // Limpando os lixos da página
    return () => {
      clearTimeout(timeout.current);
    };
  }, [time, navigate]);

  return (
    <div>
      {/* Você vai sair daqui em X */}
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};
