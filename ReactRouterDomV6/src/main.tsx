import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";

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
        <Route path="/posts" element={<Post />} />
        {/* Pegando um post especifico utilizando o parâmetro ID (UTILIZANDO ESPECIFICIDADE) */}
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
