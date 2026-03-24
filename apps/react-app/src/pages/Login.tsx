import React, { useState } from "react";
import type { Authentication } from "./../../../../packages/core/domain/usecases";

type LoginProps = {
  authentication: Authentication;
};

export function Login({ authentication }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Assumindo que o método auth recebe as credenciais
      await authentication.auth({ email, password });
      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Erro ao autenticar. Verifique seus dados.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" disabled={isLoading} style={styles.button}>
          {isLoading ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

// Estilos básicos apenas para visualização
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    width: "300px",
    gap: "10px",
  },
  input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc" },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
