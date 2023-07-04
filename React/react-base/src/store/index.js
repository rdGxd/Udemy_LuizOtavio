import { legacy_createStore as createStore } from "redux";

import rootReducer from "./modules/rootReducer";

// Reduce é quem vai escutar as ações que estão sendo disparadas.
// Dependendo da ação que for disparada ele executa determinada ação

const store = createStore(rootReducer);

export default store;
