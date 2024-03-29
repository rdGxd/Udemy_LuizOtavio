import { Link } from "react-router-dom";
import "./style.css";

// Quando utiliza o <a></a> você recarrega toda a página -> Se você tiver algum estado que tivesse carregando de um lado para o outro você ira perder -> ContextManager

// Talvez usar para fazer um LOGOUT seja uma boa ideia

// Se você quiser apenas trocar o component SEM ATUALIZAR TODA A PÁGINA use o <Link></Link>

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* enviado estado via react-router-dom */}
          {/* Quando eu clico no link eu to enviando o estado */}
          <Link to="/about" state={"This is state from ABOUT"}>About</Link>
        </li>
        <li>
          {/* Pegando todos os posts */}
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          {/* Especificando qual post eu quero */}
          <Link to="/posts/10">Posts 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
