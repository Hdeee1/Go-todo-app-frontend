"use client"
import Button from "./button.jsx"
import { useAuth } from "../context/auth-context.jsx"
import { navigate } from "../router.jsx"

export default function Header() {
  const { token, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div
          className="brand"
          onClick={() => navigate(token ? "/dashboard" : "/login")}
          role="button"
          aria-label="Go home"
          tabIndex={0}
        >
          <span className="brand-dot" /> TodoLite
        </div>
        <nav className="nav">
          {!token ? (
            <div className="nav-actions">
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </div>
          ) : (
            <div className="nav-actions">
              <span className="muted small">{user?.username}</span>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
