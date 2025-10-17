import axios from "axios";

const API_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async (username, password) => {
  try {
    const response = await api.post("/register", { username, password });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "Register failed",
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/login", { username, password });

    if (response.data?.token) {
      return {
        success: true,
        data: response.data.token,
       };
    }

    return {
      success: false,
      message: "Token is not found in response",
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "login failed",
    };
  }
};

export const getTodos = async () => {
  try {
    const response = await api.get("/todos");
    return { success: true, data: response.data.todos };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "failed to get todos",
    };
  }
};

export const createTodo = async (task) => {
  try {
    const response = await api.post("/todo", { task });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "failed to create todo",
    };
  }
};

export const updateTodo = async (id, completed) => {
  try {
    await api.put(`/todos/${id}`, { completed });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "failed to update todo",
    };
  }
};

export const deleteTodo = async (id) => {
  try {
    await api.delete(`/todos/${id}`);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "failed to delete todo",
    };
  }
};

export default api;
