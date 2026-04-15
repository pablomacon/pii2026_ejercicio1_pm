const AuthService = {
  beginGoogleLogin() {
    return new Promise((resolve) => {
      if (!window.google || !window.google.accounts || !window.google.accounts.id) {
        resolve({
          ok: false,
          message: "Google Identity Services no cargó correctamente."
        });
        return;
      }

      window.google.accounts.id.initialize({
        client_id: window.APP_CONFIG.googleClientId,
        callback: (response) => {
          if (!response || !response.credential) {
            resolve({
              ok: false,
              message: "No se recibió credencial de Google."
            });
            return;
          }

          resolve({
            ok: true,
            idToken: response.credential
          });
        }
      });

      window.google.accounts.id.prompt((notification) => {
        // Si querés, después podemos afinar mensajes según el estado del prompt
        if (
          notification.isNotDisplayed &&
          notification.isNotDisplayed()
        ) {
          resolve({
            ok: false,
            message: "No se pudo mostrar el inicio de sesión de Google."
          });
        }
      });
    });
  },

  async validateAccess({ idToken, slug }) {
    try {
      const response = await fetch(`${window.APP_CONFIG.apiBaseUrl}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idToken,
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