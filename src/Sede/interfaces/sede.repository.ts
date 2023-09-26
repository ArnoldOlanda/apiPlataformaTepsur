import { UploadedFile } from "express-fileupload";
import { CreateSedeDto } from "../dto/createSede.dto";
import { Sede } from "../entity/Sede.entity";

export interface SedeRepository {
    listAll(): Promise<Sede[]>;
    findById(uuid: string): Promise<Sede | null>;
    register(sede: CreateSedeDto): Promise<Sede>;
    updateFirmas(
        sedeUuid: string,
        firmaCoordinador: UploadedFile,
        firmaDirector: UploadedFile
    ): Promise<Sede>;
    delete(uuid: string): Promise<Sede>;
}
