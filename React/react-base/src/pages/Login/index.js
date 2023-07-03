import React from "react";

// Importando o CSS
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sti </Paragrafo>
      <a href="google.com.br">Link</a>
    </Container>
  );
}
