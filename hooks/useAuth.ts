"use client";

import { useEffect, useState } from "react";
import { AuthService } from "../services/auth.service";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      setLoading(true);

      const session = await AuthService.getSession();

      if (session) {
        const currentUser = await AuthService.getUser();
        setUser(currentUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);

      await AuthService.login(email, password);

      await checkUser();

      return true;
    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      await AuthService.logout();

      setUser(null);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    checkUser,
  };
}