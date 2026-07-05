import { persist } from "zustand/middleware";
import { create } from "zustand";

interface User {

  id: string;

  name: string;

  email: string;

  role: string;

}

interface AuthState {

  user: User | null;

  loggedIn: boolean;

  login: (
    user: User
  ) => void;

  logout: () => void;

}

export const useAuthStore =
create<AuthState>()(

persist(

(set) => ({

user: null,

loggedIn: false,

login: (user) =>
set({

user,

loggedIn: true,

}),

logout: () =>
set({

user: null,

loggedIn: false,

}),

}),

{

name: "foremost-auth",

},

)

);