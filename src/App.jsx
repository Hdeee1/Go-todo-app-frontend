import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoListPage from './pages/TodoListPage';

// Komponen helper untuk melindungi route
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Route yang dilindungi */}
        <Route 
          path="/todos" 
          element={
            <PrivateRoute>
              <TodoListPage />
            </PrivateRoute>
          } 
        />
        
        {/* Route default */}
        <Route path="*" element={<Navigate to="/todos" />} />
      </Routes>
    </Router>
  );
}

export default App;