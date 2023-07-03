import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Importando nossos arquivos
import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    // Toda as minha rotas tem que estar dentro de Router
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
