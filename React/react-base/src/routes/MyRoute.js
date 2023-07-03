import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// O estado do REDUCE é acessível em toda a aplicação

// Checando a rota e se o usuário está logado e também se o token do usuário é valido
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  // Verificando se o usuário está logado
  const isLoggedIn = true;

  // Checando se a rota é fechada e se o usuário está logado
  if (isClosed && !isLoggedIn) {
    return (
      // Redirecionando o usuário para fazer o login e salvando a rota em que ele estava anteriormente
      <Redirect
        to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

// Definindo a rota aberta como padrão
MyRoute.defaultProps = {
  isClosed: false,
};

// Validando PROPS
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
