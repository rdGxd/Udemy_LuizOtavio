import React from "react";
import { useDispatch } from "react-redux";

// Importando o CSS
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
  // Disparador -> pode disparar quantas ações eu quiser
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    // Ação vai descrever para o Redux o que ele tem que fazer -> vai ter um tipo e esse tipo vai falar pro reduce
    dispatch({
      type: "BOTAO_CLICADO",
    });
  };

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sti </Paragrafo>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
