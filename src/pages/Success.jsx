import { useEffect, useState } from "react";

const Success = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showToast, setShowToast] = useState(false);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!user) return null;

  return (
    <>
      {/* ✅ TOAST */}
      {showToast && (
        <div className="toast">
          ✅ Logged in successfully!
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🚀 GoogleAuth</div>

        <div className="nav-right">
          <img src={user.avatar} alt="avatar" className="nav-avatar" />
          <div className="nav-user">
            <span className="nav-name">{user.name}</span>
            <span className="nav-email">{user.email}</span>
          </div>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      {/* DASHBOARD */}
      <main className="dashboard">
        <h1>Welcome, {user.name.split(" ")[0]} 👋</h1>
        <p className="subtitle">
          You have successfully logged in using Google Authentication
        </p>

        <div className="cards">
          <div className="card">🔐 Secure Login</div>
          <div className="card">📦 MongoDB</div>
          <div className="card">⚡ JWT Auth</div>
        </div>
      </main>
    </>
  );
};

export default Success;
