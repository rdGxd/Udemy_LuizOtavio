import React from 'react'; // Sempre precisa importa o React na hora de criar um componente
import Main from './components/Main';
import './App.css';

// Componentes que não tem estados são funções normais eles retornam um jsx
export default function App() {
  return (
    // Eu sempre posso retornar só 1 elemento que envolva os outros elementos
    // Se eu não quiser usar uma <div></div> eu posso usar um fragmento <> </>
    <Main />
  );
}
