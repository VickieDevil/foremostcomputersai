"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const success = await login(email, password);

    if (success) {
      router.push("/");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#fff",
          padding: 35,
          borderRadius: 10,
          boxShadow: "0 2px 12px rgba(0,0,0,.15)",
        }}
      >
        <h2>Foremost Computers AI</h2>

        <p>Admin Login</p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 15,
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: 25,
            padding: 14,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: 8,
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}