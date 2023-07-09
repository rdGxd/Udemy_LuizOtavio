import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { NotFound } from "./components/NotFound";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";
import { Post } from "./components/Post";
import "./styles/global.css";

// Você precisa de um router para colocar suas rotas dentro dele
// O ROUTER SERIA UM ROTEADOR

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Tudo que for relacionado com o react-router-dom tem que está dentro do BrowserRouter */}
    <BrowserRouter>
      {/* Esse Menu é um componente mas usa algo do react-router-dom (LINK) */}
      <Menu />
      {/* Falando que eu quero Rotas aqui dentro -> Utilizo o ROUTES */}
      <Routes>
        {/* O path é como se fosse minha condição -> Qual o caminho que eu estou */}
        {/* O element é o componente que eu quero que seja renderizado */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Pegando um post especifico utilizando o parâmetro ID (UTILIZANDO ESPECIFICIDADE) */}
        {/* <Route path="/posts/:id" element={<Posts />} /> */}

        {/* Carregando um elemento dentro de outro USANDO OUTLET */}
        <Route path="/posts" element={<Posts />}>
        {/* ROTA ANINHADA PARA CARREGA UM TRECHO DA PÁGINA DENTRO DE OUTRA*/}
        {/* SE VOCÊ QUISER ATUALIZAR SOMENTE UM TRECHO */}
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
