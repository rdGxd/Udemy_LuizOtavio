import "./style.css";
import { Link } from "react-router-dom";

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
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
