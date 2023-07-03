import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

/* Quando a gente quiser uma rota exatamente igual a gente pediu acrescente um exact */

export default function Routes() {
  return (
    // Todas as minha rotas tem que estar dentro de Router
    <>
      {/* Switch serve para garantir que apenas uma rota seja chamada por vez */}
      <Switch>
        {/* Escolhendo qual o caminho e componente que vai ser renderizado */}
        <MyRoute exact path="/" component={Login} isClosed />
        <MyRoute path="*" component={Page404} />
      </Switch>
    </>
  );
}
