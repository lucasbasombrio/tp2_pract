// models/Nota.js
class Nota {
  constructor() {
    this.notas = []; // Arreglo para almacenar las notas
    this.currentId = 1; // Iniciar el ID para las notas
  }

  // Crear una nueva nota
  create = (nombre, apellido, nota) => {
    const newNota = {
      id: this.currentId++, // Asignar un ID único
      nombre,
      apellido,
      nota,
    };
    this.notas.push(newNota);
    return newNota;
  };

  // Obtener todas las notas
  getAll = () => {
    return this.notas;
  };

  // Obtener notas agrupadas por alumno
  getGroupedByStudent = () => {
    const grouped = [];
    this.notas.forEach((nota) => {
      const student = grouped.find(
        (student) =>
          student.nombre === nota.nombre && student.apellido === nota.apellido
      );
      if (student) {
        student.nota.push(nota.nota);
      } else {
        grouped.push({
          nombre: nota.nombre,
          apellido: nota.apellido,
          nota: [nota.nota],
        });
      }
    });
    return grouped;
  };
}

export default Nota;
