import React from "react";
import { BrowserRouter } from "react-router-dom";

// Importando pages
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    // Toda as minha rotas tem que estar dentro de BrowserRouter
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
