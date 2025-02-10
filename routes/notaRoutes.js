// routes/notaRoutes.js
import { Router } from "express";
import NotaController from "../controller/NotaController.js";

const routes = Router();
const controller = new NotaController();

routes.post("/nota", controller.registrarNota); // Registrar una nota
routes.get("/notas", controller.listarNotas); // Listar todas las notas
routes.get("/notas/agrupadas", controller.listarNotasAgrupadas); // Listar notas agrupadas
routes.get("/estadisticas", controller.obtenerEstadisticasPorAlumno); // Estadísticas por alumno
routes.get("/promedio", controller.obtenerPromedioCurso); // Promedio del curso

export default routes;
