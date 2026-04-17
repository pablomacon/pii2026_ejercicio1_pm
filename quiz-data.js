window.QUIZ_DATA = {
  slug: "objetos-atributos-01",
  titulo: "Reconocimiento de clases, objetos, atributos, métodos y relaciones",
  puntajeTotal: 12,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: "¿Cuál de los siguientes es un objeto concreto?",
      opciones: [
        { valor: "productos", texto: "Productos", correcta: false },
        { valor: "estudiante", texto: "Estudiante", correcta: false },
        { valor: "laptop_hp", texto: "Laptop HP 15 pulgadas", correcta: true },
        { valor: "vehiculo", texto: "Vehículo", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 2,
      tipo: "checkbox",
      enunciado: "Seleccioná los atributos de la clase Estudiante:",
      opciones: [
        { valor: "nombre", texto: "nombre", correcta: true },
        { valor: "peso", texto: "peso", correcta: false },
        { valor: "edad", texto: "edad", correcta: true },
        { valor: "altura", texto: "altura", correcta: false },
        { valor: "documento", texto: "documento", correcta: true }
      ],
      puntaje: 1
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: "¿Cuál de los siguientes es un método de la clase Producto?",
      opciones: [
        { valor: "precio", texto: "precio", correcta: false },
        { valor: "nombrar", texto: "nombrar()", correcta: false },
        { valor: "calcular_total", texto: "calcularTotal()", correcta: true },
        { valor: "color", texto: "color", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: "¿Cuál es una relación válida en un sistema de facturación de un almacén?",
      opciones: [
        { valor: "cliente_compra_producto", texto: "Cliente compra Producto", correcta: true },
        { valor: "producto_compra_cliente", texto: "Producto compra Cliente", correcta: false },
        { valor: "estudiante_contiene_profesor", texto: "Estudiante contiene Profesor", correcta: false },
        { valor: "libro_programa_computadora", texto: "Libro programa Computadora", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado: "En la clase Auto, ¿cuál es incorrecto?",
      opciones: [
        { valor: "matricula", texto: "matrícula", correcta: false },
        { valor: "modelo", texto: "modelo", correcta: false },
        { valor: "velocidad", texto: "velocidad", correcta: false },
        { valor: "escribano", texto: "escribano", correcta: true }
      ],
      puntaje: 1
    },
    {
      numero: 6,
      tipo: "checkbox",
      enunciado: "Seleccioná correctamente atributos y métodos que correspondan a una clase Biblioteca:",
      opciones: [
        { valor: "nombre", texto: "nombre", correcta: true },
        { valor: "direccion", texto: "dirección", correcta: true },
        { valor: "prestar_libro", texto: "prestarLibro()", correcta: true },
        { valor: "comer", texto: "comer()", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado: "¿Cuál de los siguientes es una clase?",
      opciones: [
        { valor: "juan_perez", texto: "Juan Pérez", correcta: false },
        { valor: "factura_1234", texto: "Factura N°1234", correcta: false },
        { valor: "cliente", texto: "Cliente", correcta: true },
        { valor: "pan_flauta", texto: "Pan flauta 500g", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 8,
      tipo: "checkbox",
      enunciado: "Seleccioná objetos concretos:",
      opciones: [
        { valor: "toyota_corolla", texto: "Auto Toyota Corolla matrícula ABC1234", correcta: true },
        { valor: "vehiculo", texto: "Vehículo", correcta: false },
        { valor: "cien_anos", texto: "Libro “Cien años de soledad”", correcta: true },
        { valor: "biblioteca", texto: "Biblioteca", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado: "¿Cuál de los siguientes es un atributo de la clase Factura?",
      opciones: [
        { valor: "calcular_total", texto: "calcularTotal()", correcta: false },
        { valor: "imprimir", texto: "imprimir()", correcta: false },
        { valor: "fecha", texto: "fecha", correcta: true },
        { valor: "cobrar", texto: "cobrar()", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 10,
      tipo: "checkbox",
      enunciado: "Seleccioná los métodos de la clase Estudiante:",
      opciones: [
        { valor: "nombre", texto: "nombre", correcta: false },
        { valor: "edad", texto: "edad", correcta: false },
        { valor: "inscribirse", texto: "inscribirse()", correcta: true },
        { valor: "rendir_examen", texto: "rendirExamen()", correcta: true }
      ],
      puntaje: 1
    },
    {
      numero: 11,
      tipo: "radio",
      enunciado: "¿Cuál de las siguientes afirmaciones es correcta?",
      opciones: [
        { valor: "objeto_sin_atributos", texto: "Un objeto no tiene atributos", correcta: false },
        { valor: "clase_es_objeto", texto: "Una clase es un objeto concreto", correcta: false },
        { valor: "objeto_instancia", texto: "Un objeto es una instancia de una clase", correcta: true },
        { valor: "metodo_es_atributo", texto: "Un método es un atributo", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 12,
      tipo: "checkbox",
      enunciado: "En un sistema de biblioteca, seleccioná relaciones válidas:",
      opciones: [
        { valor: "socio_presta_libro", texto: "Socio presta Libro", correcta: false },
        { valor: "socio_toma_libro", texto: "Socio toma prestado Libro", correcta: true },
        { valor: "libro_registra_socio", texto: "Libro registra Socio", correcta: false },
        { valor: "biblioteca_gestiona_socio", texto: "Biblioteca gestiona Socio", correcta: true }
      ],
      puntaje: 1
    }
  ]
};