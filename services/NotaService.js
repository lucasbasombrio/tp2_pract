import Nota from "../Models/Nota.js";

class NotaService {
  notaModel = new Nota();

  // Registrar una nueva nota
  registrarNota = (nombre, apellido, nota) => {
    if (
      !nombre ||
      !apellido ||
      typeof nombre !== "string" ||
      typeof apellido !== "string" ||
      nota < 0 ||
      nota > 10
    ) {
      throw new Error("Los datos ingresados no son válidos");
    }
    return this.notaModel.create(nombre, apellido, nota);
  };

  // Listar todas las notas
  listarNotas = () => {
    return this.notaModel.getAll();
  };

  // Listar las notas agrupadas por alumno
  listarNotasAgrupadas = () => {
    return this.notaModel.getGroupedByStudent();
  };

  // Obtener las estadísticas por alumno
  obtenerEstadisticasPorAlumno = () => {
    const alumnos = this.notaModel.getGroupedByStudent();
    return alumnos.map((alumno) => {
      const cantidad = alumno.nota.length;
      const promedio = alumno.nota.reduce((acc, curr) => {
          return acc + Number(curr); // Convierte la nota a número
        }, 0) / cantidad;

      const minima = Math.min(...alumno.nota);
      const maxima = Math.max(...alumno.nota);
      return {
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        promedio: promedio.toFixed(2),
        cantidad,
        minima,
        maxima,
      };
    });
  };

  // Obtener el promedio del curso
  obtenerPromedioCurso = () => {
    const todasLasNotas = this.notaModel.getAll().map((nota) => nota.nota);
    const totalNotas = todasLasNotas.reduce((acc, curr) => acc + Number(curr), 0);

    const cantidadNotas = todasLasNotas.length;
    const promedioCurso = (totalNotas / cantidadNotas).toFixed(2);
    return { promedio: promedioCurso };
  };
}

export default NotaService;
