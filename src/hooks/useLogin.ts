import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { LoginType } from "../types/LoginType";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, intendedRoute, setIntendedRoute } = useAuth();

  const mockLogin = async (
    email: string,
    password: string
  ): Promise<LoginType> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "fernan@gmail.com" && password) {
      return {
        success: true,
        token: "mock-jwt-token",
      };
    }

    return {
      success: false,
      error: "Credenciales inválidas",
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await mockLogin(email, password);

      if (response.success) {
        await login({ email, password });
        navigate(intendedRoute || "/");
        setIntendedRoute(null);
      } else {
        setError(response.error || "Credenciales inválidas");
      }
    } catch (err) {
      setError((err as string) || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleSubmit,
  };
};
