import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import auth from "./auth";
import trees from "./trees";
import orders from "./orders";

const reducers = combineReducers({ auth, user, users, trees, orders });

export default reducers;
