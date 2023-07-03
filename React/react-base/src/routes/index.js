import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Page404 from "../pages/Page404";

/* Quando a gente quiser uma rota exatamente igual a gente pediu acrescente um exact */

export default function Routes() {
  return (
    // Toda as minha rotas tem que estar dentro de BrowserRouter
    <>
      {/* Switch serve para garantir que apenas uma rota seja chamada por vez */}
      <Switch>
        {/* Escolhendo qual o caminho e componente que vai ser renderizado */}
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
}
