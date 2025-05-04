import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
