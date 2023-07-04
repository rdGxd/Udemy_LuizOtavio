import { legacy_createStore as createStore } from "redux";

// Reduce é quem vai escutar as ações que estão sendo disparadas.
// Dependendo da ação que for disparada ele executa determinada ação

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "BOTAO_CLICADO": {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
