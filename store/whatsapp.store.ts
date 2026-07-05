import { create } from "zustand";
import { persist } from "zustand/middleware";
import {

  WhatsappMessage,

} from "@/types/whatsapp";

interface WhatsappState {

  messages:
    WhatsappMessage[];

  activeChat:
    string | null;

  setMessages: (
    messages:
      WhatsappMessage[]
  ) => void;

  setActiveChat: (
    id: string
  ) => void;

  clear: () => void;

}

export const useWhatsappStore =
create<WhatsappState>()(

persist(

(set) => ({

messages: [],

activeChat: null,

setMessages: (messages) =>
set({
messages,
}),

setActiveChat: (id) =>
set({
activeChat: id,
}),

clear: () =>
set({

messages: [],

activeChat: null,

}),

}),

{

name: "foremost-whatsapp",

},

)

);