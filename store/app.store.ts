import { create } from "zustand";

import { persist } from "zustand/middleware";

interface AppState {

  sidebarOpen: boolean;

  loading: boolean;

  theme: "light" | "dark";

  toggleSidebar: () => void;

  setLoading: (
    loading: boolean
  ) => void;

  toggleTheme: () => void;

}

export const useAppStore =
create<AppState>()(

persist(

(set) => ({

sidebarOpen: true,

loading: false,

theme: "light",

toggleSidebar: () =>
set((state) => ({
sidebarOpen:
!state.sidebarOpen,
})),

setLoading: (loading) =>
set({
loading,
}),

toggleTheme: () =>
set((state) => ({
theme:
state.theme === "light"
? "dark"
: "light",
})),

}),

{

name: "foremost-app",

},

)

);