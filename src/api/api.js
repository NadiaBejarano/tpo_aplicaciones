// api.js

const apiUrl = "http://localhost:3000"; // ajusta la URL según tu entorno

const api = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
  recuperarPassword: async (email) => {
    try {
      const response = await fetch(`${apiUrl}/api/recuperar-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
  resetearPassword: async (token, newPassword) => {
    try {
      const response = await fetch(`${apiUrl}/api/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud de reseteo de contraseña");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
  registrarUsuario: async (usuarioData) => {
    try {
      const response = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioData),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud de registro de usuario");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
};

export default api;
