import React from 'react'; // Sempre precisa importa o React na hora de criar um componente
import Main from './components/Main';
import './App.css';

// Componentes que não tem estados são funções normais eles retornam um jsx
export default function App() {
  return (
    /*
    Se eu quiser retornar mais de 1 elemento preciso criar 1 ELEMENTO PAI para envolver os outros elementos.
    Se eu não quiser usar uma <div></div> eu posso usar um fragmento <> </>
    Lembre de colocar tudo dentro de um RETURN()
    */
    <Main />
  );
}
