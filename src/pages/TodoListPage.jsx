import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, deleteTodo } from '../api/api';

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data.todos || []);
    } catch (error) {
      console.error('Gagal mengambil todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await createTodo(task);
      setTask('');
      await fetchTodos();
    } catch (error) {
      console.error('Gagal menambahkan todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (error) {
      console.error('Gagal menghapus todo:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <button onClick={handleLogout}>Logout</button>
      
      <form onSubmit={handleCreateTodo}>
        <input 
          type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Tugas baru..." 
        />
        <button type="submit">Tambah</button>
      </form>
      
      <ul>
        {todos.length === 0 ? (
          <li>Tidak ada data</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => handleDeleteTodo(todo.id)}>Hapus</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoListPage;
