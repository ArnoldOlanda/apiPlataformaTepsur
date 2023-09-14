import fileUpload from "express-fileupload";

export class CreateCertificadoDto {
    descripcion: string;
    file: fileUpload.UploadedFile;
    matriculaUuid: string;
}
