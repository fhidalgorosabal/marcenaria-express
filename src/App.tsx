import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./lib/providers/AuthProvider";
import NavBar from "./components/layout/NavBar";
import AppRoutes from "./routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <main className="max-w-7xl mx-auto py-6">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
