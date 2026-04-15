const ResultsService = {
  async guardarIntento(payload) {
    try {
      const response = await fetch(
        `${window.APP_CONFIG.apiBaseUrl}/intentos/guardar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        return {
          ok: false,
          message: data.message || "No se pudo guardar el intento.",
        };
      }

      return data;
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: "Error al conectar con el servidor para guardar el intento.",
      };
    }
  },
};
