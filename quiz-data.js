window.QUIZ_DATA = {
  slug: "objetos-atributos-01",
  titulo: "Reconocimiento de objetos, atributos y clases",
  puntajeTotal: 4,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: "Clasificá cada elemento como clase u objeto concreto.",
      opciones: [
        { valor: "producto", texto: "Producto", correcta: false },
        { valor: "refresco", texto: '"Refresco cola 500 ml"', correcta: true },
        { valor: "estudiante", texto: "Estudiante", correcta: false },
      ],
      puntaje: 1,
    },
    {
      numero: 2,
      tipo: "checkbox",
      enunciado: "Seleccioná los atributos correctos de la clase Producto.",
      opciones: [
        { valor: "nombre", texto: "nombre", correcta: true },
        { valor: "precio", texto: "precio", correcta: true },
        { valor: "vender", texto: "vender()", correcta: false },
      ],
      puntaje: 1,
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: "Elegí la relación que tiene sentido en el caso Biblioteca.",
      opciones: [
        {
          valor: "prestamo",
          texto: "Socio toma prestado Libro",
          correcta: true,
        },
        {
          valor: "desayuna",
          texto: "Libro desayuna con Biblioteca",
          correcta: false,
        },
        {
          valor: "flota",
          texto: "Estudiante flota sobre Libro",
          correcta: false,
        },
      ],
      puntaje: 1,
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: "Detectá el intruso en la clase Auto.",
      opciones: [
        { valor: "matricula", texto: "matrícula", correcta: false },
        { valor: "modelo", texto: "modelo", correcta: false },
        { valor: "cocinar", texto: "cocinar()", correcta: true },
      ],
      puntaje: 1,
    },
  ],
};
