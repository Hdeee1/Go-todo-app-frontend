import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Logged in! Replace this with your auth flow.");
    }, 700);
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <AuthCard
        title="Welcome back"
        description="Log in to access your to‑do list."
        footer={
          <p className="text-sm text-muted-foreground">
            New here?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Create an account
            </Link>
          </p>
        }
      >
        <form className="grid gap-4" onSubmit={onSubmit}>
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </AuthCard>
    </main>
  );
};

export default LoginPage;
