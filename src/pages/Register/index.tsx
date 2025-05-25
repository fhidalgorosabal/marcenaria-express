import { useRegister } from "../../hooks";
import { Banner } from "../../components/common";
import { RegisterForm } from "../../components/features";

const Register = () => {
  const {
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
  } = useRegister();

  return (
    <Banner subtitle="Registrarse" className="max-w-md w-full">
      <RegisterForm
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Banner>
  );
};

export default Register;
