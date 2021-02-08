import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Store