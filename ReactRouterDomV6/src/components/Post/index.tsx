import { useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Post = () => {
  // Pegando o ID direto dos parâmetros
  const { id } = useParams();

  // Pegando Parâmetros direto da URL
  const [qs] = useSearchParams();
  /*
  const params = new URLSearchParams();
  params.append("page", "valor1");
  params.append("page", "10");
  const url = `https://www.example.com/?${params.toString()}`;
  console.log(url);
  */
  // Se quiser pega apenas UM PARÂMETRO utilize o .get("EXEMPLO")

  return (
    <div>
      <h1>
        Post {`Para: ${id || ""}`} {`QS: ${qs}`}
      </h1>
    </div>
  );
};
