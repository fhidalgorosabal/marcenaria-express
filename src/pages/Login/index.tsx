import { useLogin } from "../../hooks";
import { Banner } from "../../components/common";
import { LoginForm } from "../../components/features";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleSubmit,
  } = useLogin();

  return (
    <Banner subtitle="Iniciar sesión" className="max-w-md w-full">
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Banner>
  );
};

export default Login;
