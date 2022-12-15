import { createContext } from "react";
import { User } from "./User";

export const rootStoreContext = createContext({
	userStore: new User()
});