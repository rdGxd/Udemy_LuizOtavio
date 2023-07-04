import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

// Configurando o MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// Reduce é quem vai escutar as ações que estão sendo disparadas.
// Dependendo da ação que for disparada ele executa determinada ação

// Aplicando middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
