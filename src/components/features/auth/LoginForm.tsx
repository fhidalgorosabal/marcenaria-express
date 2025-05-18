import Button from "../../common/Button";
import { LoginFormType } from "../../../types/LoginFormType";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  isLoading,
  onSubmit,
}: LoginFormType) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {error && <div className="text-red-500 text-center text-sm">{error}</div>}
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
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-t-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
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
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-b-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <Button variant="outline" type="submit" size="xl" isLoading={isLoading}>
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
