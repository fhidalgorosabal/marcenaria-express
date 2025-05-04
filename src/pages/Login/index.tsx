import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/common/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await mockLogin(email, password);

      if (response.success) {
        const success = await login(response.token as string);
        if (success) {
          navigate("/");
        } else {
          setError("Error al iniciar sesión");
        }
      } else {
        setError(response.error || "Credenciales inválidas");
      }
    } catch (err) {
      setError((err as string) || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const mockLogin = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && password) {
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

  return (
    <div className="relative w-full">
      <div className="bg-banner absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-200">
              Iniciar sesión
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-center text-sm">{error}</div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-200 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-200 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                type="submit"
                size="xl"
                isLoading={isLoading}
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
