import { useEffect } from "react";
import { toast } from "react-toastify";
import { RegisterFormType } from "../../../types";
import Button from "../../common/Button";

const RegisterForm = ({
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
  onSubmit,
}: RegisterFormType) => {
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="full-name" className="sr-only">
            Nombre completo
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-t-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder="Nombre completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />
        </div>
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
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
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
            autoComplete="new-password"
            required
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirmar contraseña
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-b-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <Button variant="outline" type="submit" size="xl" isLoading={isLoading}>
          Registrarse
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
