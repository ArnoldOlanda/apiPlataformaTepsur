import { Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { SedeService } from "../services/sede.service";
import { UploadedFile } from "express-fileupload";
import { DatabaseErrorBase } from "../../errors/DatabaseErrorBase";

export class SedeController {
    constructor(private readonly sedeService: SedeService) {}
    public getAll = async (_req: Request, res: Response) => {
        try {
            const sedes = await this.sedeService.listAll();

            return res.json(sedes);
        } catch (error: any) {
            console.log(error);
            if (error instanceof DatabaseError) {
                return res.status(error.codeStatus).json({
                    name: error.name,
                    msg: error.message,
                });
            }
            return res.status(500).json({
                msg: "contact the administrator",
            });
        }
    };
    public getOneById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const sede = await this.sedeService.findById(id);

            return res.json(sede);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseError) {
                return res.status(error.codeStatus).json({
                    name: error.name,
                    msg: error.message,
                });
            }
            return res.status(500).json({
                msg: "contact the administrator",
            });
        }
    };

    public postSede = async (req: Request, res: Response) => {
        try {
            const { nombre, direccion } = req.body;
            const createdSede = await this.sedeService.register({
                nombre,
                direccion,
            });

            return res.json(createdSede);
        } catch (error: any) {
            console.log(error);
            if (error instanceof DatabaseError) {
                return res.status(error.codeStatus).json({
                    name: error.name,
                    msg: error.message,
                });
            }
            return res.status(500).json({
                msg: "contact the administrator",
            });
        }
    };

    public patchFirmas = async (req: Request, res: Response) => {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                res.status(400).json({ msg: "No hay imagen para subir." });
                return;
            }

            if (
                !req.files.firmaCoordinador ||
                !req.files.firmaDirector ||
                Object.keys(req.files).length === 0
            ) {
                res.status(400).json({
                    msg: "No hay imagen para subir (image).",
                });
                return;
            }
            const { uuid } = req.params;

            const firmaCoordinador = req.files.firmaCoordinador as UploadedFile;
            const firmaDirector = req.files.firmaDirector as UploadedFile;

            const data = await this.sedeService.updateFirmas(
                uuid,
                firmaCoordinador,
                firmaDirector
            );

            return res.json(data);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseErrorBase) {
                return res.status(error.codeStatus).json({
                    name: error.name,
                    msg: error.message,
                });
            }
            return res.status(500).json({
                msg: "contact the administrator",
            });
        }
    };

    public deleteSede = async (req: Request, res: Response) => {
        try {
            const { uuid } = req.params;
            const sede = this.sedeService.delete(uuid);
            return res.json(sede);
        } catch (error) {
            console.log(error);
            if (error instanceof DatabaseError) {
                return res.status(error.codeStatus).json({
                    name: error.name,
                    msg: error.message,
                });
            }
            return res.status(500).json({
                msg: "contact the administrator",
            });
        }
    };
}
