import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
      navigate("/about", {
        /* Quando você redireciona se o usuário der um voltar no navegador vai cair na página anterior e vai se redirecionada dnv quando você usa o replace você troca esse URL -> você perde página que redireciono */
        // replace: Quando voce não quer que esse LINk fique no HISTORY depois do redirect

        // Enviando estado via react-router-dom
        // Enviando o estado para a página redirecionada
        state: `This is the state from REDIRECT: ${Math.random()}`,
      });
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
