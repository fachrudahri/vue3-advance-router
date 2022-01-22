import { createStore } from "vuex";
import post from './modules/post';
import user from "./modules/user";

export const store = createStore({
  modules: {
    post,
    user
  }
})