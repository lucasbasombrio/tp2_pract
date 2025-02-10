// controllers/NotaController.js
import NotaService from "../services/NotaService.js";

class NotaController {
  notaService = new NotaService();

  // Registrar una nueva nota
  registrarNota = async (req, res) => {
    try {
      const { nombre, apellido, nota } = req.body;
      const newNota = await this.notaService.registrarNota(nombre, apellido, nota);
      res.status(200).send(newNota);
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };

  // Listar todas las notas
  listarNotas = async (req, res) => {
    try {
      const notas = await this.notaService.listarNotas();
      res.status(200).send(notas);
    } catch (error) {
      res.status(500).send({ errorMsg: "Error al listar notas" });
    }
  };

  // Listar notas agrupadas por alumno
  listarNotasAgrupadas = async (req, res) => {
    try {
      const notasAgrupadas = await this.notaService.listarNotasAgrupadas();
      res.status(200).send(notasAgrupadas);
    } catch (error) {
      res.status(500).send({ errorMsg: "Error al listar notas agrupadas" });
    }
  };

  // Obtener estadísticas por alumno
  obtenerEstadisticasPorAlumno = async (req, res) => {
    try {
      const estadisticas = await this.notaService.obtenerEstadisticasPorAlumno();
      res.status(200).send(estadisticas);
    } catch (error) {
      res.status(500).send({ errorMsg: "Error al obtener estadísticas de alumnos" });
    }
  };

  // Obtener el promedio del curso
  obtenerPromedioCurso = async (req, res) => {
    try {
      const promedio = await this.notaService.obtenerPromedioCurso();
      res.status(200).send(promedio);
    } catch (error) {
      res.status(500).send({ errorMsg: "Error al calcular el promedio del curso" });
    }
  };
}

export default NotaController;
