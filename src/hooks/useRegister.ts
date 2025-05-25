import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { RegisterType } from "../types";

export const useRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const mockRegister = async (
    fullName: string,
    email: string,
    password: string
  ): Promise<RegisterType> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && password && fullName) {
      return {
        success: true,
        token: "mock-jwt-token",
      };
    }

    return {
      success: false,
      error: "Error al registrar usuario",
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
      const response = await mockRegister(fullName, email, password);

      if (response.success) {
        await login({ email, password });
        navigate("/");
      } else {
        setError(response.error || "Error al registrar usuario");
      }
    } catch (err) {
      setError((err as string) || "Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    isLoading,
    handleSubmit,
  };
};
