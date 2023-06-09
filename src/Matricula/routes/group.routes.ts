import { Router } from "express";
import { GroupController } from "../controllers/group.controller";
import { body, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields";
import { MODALIDAD, ROLES } from "../../interfaces/enums";
import { validateJWT } from "../../middlewares/validateJWT";
import { checkAuthRole } from "../../middlewares/checkAuthRole";
import {
    isCarreraValid,
    isDocenteValid,
    isHorarioValid,
    isModuloValid,
    isSecretariaValid,
    isSedeValid,
} from "../middlewares/validations";

const router = Router();
const groupController = new GroupController();
//Orden de validacion: validar token -> validar rol -> validar campos

/**
 * @swagger
 * components:
 *  schemas:
 *      Group:
 *          properties:
 *              uuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid del grupo
 *              nombre:
 *                  type: string
 *                  description: Nombre del grupo
 *              fechaInicio:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha inicio del grupo
 *              sedeUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico de la sede
 *              horarioUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico del horario
 *              carreraUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico de la carrera
 *              moduloUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico del modulo
 *              docenteUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico del docente
 *              responsableUuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unica de la secretaria(responsable del grupo)
 *              cuposMaximos:
 *                  type: number
 *                  description: Numero maximo de cupos para el grupo
 *          required:
 *              - nombre
 *              - fechaInicio
 *              - sedeUuid
 *              - modalidad
 *              - horarioUuid
 *              - carreraUuid
 *              - docenteUuid
 *              - responsableUuid
 *              - cuposMaximos
 *      GroupResponse:
 *          properties:
 *              uuid:
 *                  type: string
 *                  format: uuid
 *                  description: El uuid unico del grupo
 *              nombre:
 *                  type: string
 *                  description: Nombre del grupo
 *              fecha_inicio:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha inicio del grupo
 *              horario:
 *                  type: object
 *                  description: El horario del grupo
 *              carrera:
 *                  type: object
 *                  description: La carrera a la que pertenece el grupo
 *              docente:
 *                  type: object
 *                  description: El docente a cargo del grupo
 *              secretaria:
 *                  type: object
 *                  description: La secretaria a cargo del grupo
 *              sede:
 *                  type: object
 *                  description: La sede donde esta ubicado el grupo
 *              modulo:
 *                  type: object
 *                  description: El modulo que se esta llevando en el grupo
 *          example:
 *              uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *              nombre: Grupo test
 *              fecha_inicio: 2023-05-15 07:54:18.276
 *              horario:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  dias: ["Lun","Mar"]
 *                  hora_inicio: "8:00"
 *                  hora_fin: "11:00"
 *              carrera:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  num_modulos: 2
 *                  nombre: Mecanica automotriz
 *                  modalidad: presencial
 *              modulo:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  duracion_semanas: 4 semanas
 *              sede:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  nombre: Sede Punex
 *              secretaria:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  nombres: Test Test
 *                  ape_paterno: prueba
 *                  ape_materno: prueba
 *                  celular: 654345432
 *                  correo: test@gmail.com
 *              docente:
 *                  uuid: 03ed1634-ce6f-4125-b158-7ded8565d70b
 *                  dni: 45342312
 *                  nombres: Nombre prueba
 *                  ape_paterno: Torres
 *                  ape_materno: Flores
 */

/**
 * @swagger
 * tags:
 *  name: Group
 *  description: Endpoints para los grupos
 */

/**
 * @swagger
 * /group:
 *  post:
 *      summary: Registrar o "abrir" un nuevo grupo
 *      tags: [Group]
 *      parameters:
 *         - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Group'
 *      responses:
 *          200:
 *              description: El registro del nuevo grupo creado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/GroupResponse'
 *          500:
 *              description: Error de servidor
 *
 */
router.post(
    "/",
    [
        validateJWT,
        checkAuthRole([ROLES.ADMIN, ROLES.SECRE]),
        body("nombre").isString(),
        body("fechaInicio").isString(),
        body("modalidad").isIn([MODALIDAD.PRESENCIAL, MODALIDAD.VIRTUAL]),
        body("cuposMaximos").isNumeric(),
        body(
            [
                "sedeUuid",
                "horarioUuid",
                "carreraUuid",
                "docenteUuid",
                "responsableUuid",
            ],
            "Debe ser un UUID valido"
        ).isUUID("4"),
        body("moduloUuid").optional().isUUID("4"),
        body("sedeUuid").custom(isSedeValid),
        body("horarioUuid").custom(isHorarioValid),
        body("carreraUuid").custom(isCarreraValid),
        body("docenteUuid").custom(isDocenteValid),
        body("moduloUuid").optional().custom(isModuloValid),
        body("responsableUuid").custom(isSecretariaValid),
        validateFields,
    ],
    groupController.postGroup
);

/**
 * @swagger
 * /group/add-student:
 *  patch:
 *      summary: Agregar a un estudiante a un grupo
 *      tags: [Group]
 *      parameters:
 *         - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          matriculaUuid:
 *                              type: string
 *                              format: uuid
 *                          grupoUuid:
 *                              type: string
 *                              format: uuid
 *      responses:
 *          200:
 *              description: El registro del nuevo grupo creado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/GroupResponse'
 *          500:
 *              description: Error de servidor
 *
 */
router.patch(
    "/add-student",
    [
        validateJWT,
        checkAuthRole([ROLES.ADMIN, ROLES.SECRE]),
        body("matriculaUuid").isUUID("4"),
        body("grupoUuid").isUUID("4"),
        validateFields,
    ],
    groupController.patchAddStudent
);

/**
 * @swagger
 * /group:
 *  get:
 *      summary: Listado de grupos
 *      tags: [Group]
 *      parameters:
 *         - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: El listado de grupos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/GroupResponse'
 *          500:
 *              description: Error de servidor
 *
 */
router.get("/", [], groupController.getAll);

/**
 * @swagger
 * /group/students/{id}:
 *  get:
 *      summary: Listado de alumnos pertenecientes a un grupo
 *      tags: [Group]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *              format: uuid
 *            required: true
 *            description: El uuid del grupo
 *      responses:
 *          200:
 *              description: El listado de grupos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Matricula'
 *          500:
 *              description: Error de servidor
 *
 */
router.get(
    "/students/:id",
    [
        validateJWT,
        checkAuthRole([ROLES.ADMIN, ROLES.SECRE, ROLES.DOCENTE]),
        param("id").isString(),
        validateFields,
    ],
    groupController.getStudents
);

/**
 * @swagger
 * /group/find-by-uuid/{id}:
 *  get:
 *      summary: Buscar un grupo por uuid
 *      tags: [Group]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: El uuid del grupo a buscar
 *      responses:
 *          200:
 *              description: El listado de grupos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/GroupResponse'
 *          500:
 *              description: Error de servidor
 *
 */
router.get(
    "/find-by-uuid/:id",
    [
        validateJWT,
        checkAuthRole([ROLES.ADMIN, ROLES.SECRE]),
        param("id").isUUID("4"),
        validateFields,
    ],
    groupController.getByUuid
);

/**
 * @swagger
 * /group/find-by-name/{name}:
 *  get:
 *      summary: Buscar un grupo por nombre
 *      tags: [Group]
 *      parameters:
 *         - $ref: '#/components/parameters/token'
 *         - in: path
 *           name: name
 *           schema:
 *             type: string
 *           required: true
 *           description: El nombre del grupo a buscar
 *      responses:
 *          200:
 *              description: El listado de grupos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/GroupResponse'
 *          500:
 *              description: Error de servidor
 *
 */
router.get(
    "/find-by-name/:name",
    [
        validateJWT,
        checkAuthRole([ROLES.ADMIN, ROLES.SECRE]),
        param("name").isString(),
        validateFields,
    ],
    groupController.getByName
);

export default router;
