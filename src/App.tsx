import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import AppRoutes from "./routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="max-w-7xl mx-auto">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
