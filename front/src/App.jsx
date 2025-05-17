import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  // Função para lidar com o login
  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
    setCurrentPage("encrypt");
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setCurrentPage("login");
  };

  // Renderiza a página atual
  const renderPage = () => {
    if (!isAuthenticated) {
      return <Login onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case "encrypt":
        return <Encrypt />;
      case "decrypt":
        return <Decrypt />;
      default:
        return <Encrypt />;
    }
  };

  return (
    <div className="terminal-scan">
      {isAuthenticated && (
        <Navbar
          username={username}
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
          currentPage={currentPage}
        />
      )}
      <div className="container">
        <h1 className="app-title">
          CryptoHacker <span className="blinking-cursor">_</span>
        </h1>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
