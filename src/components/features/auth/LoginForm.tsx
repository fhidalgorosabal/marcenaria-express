import { useEffect } from "react";
import { toast } from "react-toastify";
import { LoginFormType } from "../../../types";
import { useTranslation } from "../../../hooks";
import Button from "../../common/Button";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  isLoading,
  onSubmit,
}: LoginFormType) => {
  const { translate } = useTranslation();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            {translate("email-form")}
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-t-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder={translate("email-form")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            {translate("password-form")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none relative block w-full px-3 py-4 bg-white/20 border border-gray-300 placeholder-gray-200 text-gray-200 rounded-b-md focus:outline-none focus:ring-gray-400 focus:border-2 focus:border-gray-200 focus:z-10 sm:text-sm"
            placeholder={translate("password-form")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <Button variant="outline" type="submit" size="xl" isLoading={isLoading}>
          {translate("login-menu")}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
