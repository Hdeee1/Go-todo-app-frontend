import React, { useState } from 'react';
import { loginUser } from '../api/api';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Username dan password tidak boleh kosong.');
      return;
    }

    try {
      const response = await loginUser(username, password);

      if (!response || !response.data || !response.data.token) {
        setError('Token tidak ditemukan dalam respons server.');
        return;
      }

      localStorage.setItem('token', response.data.token);
      window.location.href = '/todos';
    } catch (err) {
      console.error('Login error:', err);
      setError('Login gagal. Periksa kembali username dan password.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 80 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
      <p style={{ marginTop: 20 }}>
        Belum punya akun? <a href="/register">Daftar di sini</a>
      </p>
    </div>
  );
}

export default LoginPage;
