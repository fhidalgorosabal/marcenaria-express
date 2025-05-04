import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./lib/providers/AuthProvider";
import Header from "./components/layout/Header";
import AppRoutes from "./routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
