import * as types from "../types";

// AQUI CRIAREMOS O REDUCER DE TERMINADA FUNÇÃO -> (EXAMPLE)

const initialState = {
  botaoClicado: false,
};

// SEMPRE RETORNE UM NOVO ESTADO OU O ESTADO ATUAL

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("Sucesso");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log("Falhamos");
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Estou fazendo a requisição");
      return state;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
