import { Request, Response, response } from "express";
import { StudentService } from "../services/student.service";
import { studentAdapter } from "../adapters/student.adapter";
import { DatabaseErrorBase } from "../../errors/DatabaseErrorBase";
import fileUpload from "express-fileupload";

export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    public patchPhotoStudent = async (req: Request, res: Response) => {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                res.status(400).json({ msg: "No hay imagen para subir." });
                return;
            }

            if (!req.files.image || Object.keys(req.files).length === 0) {
                res.status(400).json({
                    msg: "No hay imagen para subir (image).",
                });
                return;
            }

            const { uuid } = req.params;
            const alumno = await this.studentService.uploadPhotoStudent(
                uuid,
                req.files.image as fileUpload.UploadedFile
            );

            return res.json(alumno);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    msg: error.message,
                    name: error.name,
                });
            }
            return res.status(500).json({
                msg: "Internal Server Error, contact the administrator",
            });
        }
    };

    public patchUpdateStudent = async (req: Request, res: Response) => {
        try {
            const student = await this.studentService.updateInfo(
                req.params.id,
                studentAdapter(req.body)
            );

            return res.json(student);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    msg: error.message,
                    name: error.name,
                });
            }
            return res.status(500).json({
                msg: "Internal Server Error, contact the administrator",
            });
        }
    };

    public getListBySede = async (req: Request, res: Response) => {
        try {
            const { sede, year } = req.query;

            const alumnos = await this.studentService.listBySede(
                String(sede),
                String(year)
            );

            return res.json(alumnos);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    msg: error.message,
                    name: error.name,
                });
            }
            return res.status(500).json({
                msg: "Internal Server Error, contact the administrator",
            });
        }
    };

    public getIsValidEmail = async (req: Request, res: Response) => {
        try {
            const { correo } = req.query;
            const alumno = await this.studentService.searchByEmail(
                String(correo)
            );

            if (alumno) {
                return res.status(403).json({
                    msg: "El correo ya se encuentra registrado",
                    name: "Already exists error",
                });
            }
            return res.json({ msg: "Correo valido" });
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    msg: error.message,
                    name: error.name,
                });
            }
            return res.status(500).json({
                msg: "Internal Server Error, contact the administrator",
            });
        }
    };

    public getByUuid = async (req: Request, res: Response) => {
        try {
            const { uuid } = req.params;
            const student = await this.studentService.searchByUuid(uuid);

            return res.json(student);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    msg: error.message,
                    name: error.name,
                });
            }
            return res.status(500).json({
                msg: "Internal Server Error, contact the administrator",
            });
        }
    };
}
