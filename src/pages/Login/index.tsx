import Banner from "../../components/common/Banner";
import LoginForm from "../../components/auth/LoginForm";
import { useLogin } from "../../hooks/useLogin";

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
