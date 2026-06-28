import { supabase } from "../lib/supabase";

export class AuthService {
  static async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  }

  static async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  }

  static async getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  }

  static async getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  }
}