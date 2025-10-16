import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { InputField } from "@/components/forms/input-field";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    // Simulate registration. Hook up to your auth later.
    setTimeout(() => {
      setLoading(false);
      alert("Registered! Replace this with your auth flow.");
    }, 700);
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <AuthCard
        title="Create your account"
        description="Register to sync your tasks across devices."
        footer={
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Log in
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
          <InputField
            id="confirm"
            type="password"
            label="Confirm password"
            placeholder="••••••••"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.currentTarget.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
      </AuthCard>
    </main>
  );
}
