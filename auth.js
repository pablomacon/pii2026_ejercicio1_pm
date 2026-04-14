const AuthService = {
  async beginGoogleLogin() {
    return {
      ok: true,
      idToken: null,
      correo: "rodajadelimonacida@gmail.com"
    };
  },

  async validateAccess({ correo, slug }) {
    try {
      const response = await fetch(`${window.APP_CONFIG.apiBaseUrl}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correo,
          slug
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          ok: false,
          message: data.message || "No se pudo validar el acceso."
        };
      }

      return data;
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: "Error al conectar con el servidor."
      };
    }
  }
};