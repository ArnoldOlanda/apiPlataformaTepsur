import path from "path";
import { Matricula } from "../../Matricula/entity";
import { NotFoundError } from "../../errors/NotFoundError";
import { deleteImage } from "../../helpers/deleteImage";
import { uploadFile } from "../../helpers/uploadFile";
import { CreateCertificadoDto } from "../dto/createCertificado.dto";
import { Certificado } from "../entity/Certificado.entity";
import { v4 as uuid } from "uuid";

interface CertificadoRepository {
    register: (d: CreateCertificadoDto) => Promise<Certificado>;
    findByUuid: (u: string) => Promise<Certificado>;
    listAll: () => Promise<Certificado[]>;
    listByMatricula: (m: string) => Promise<Certificado[]>;
    delete: (uuid: string) => Promise<string>;
}

export class CertificadoService implements CertificadoRepository {
    public register = async (data: CreateCertificadoDto): Promise<any> => {
        try {
            const { descripcion, file, matriculaUuid } = data;
            const nombreCortado = file.name.split(".");
            const extension = nombreCortado[nombreCortado.length - 1];

            const nombreTemp = uuid() + "." + extension;
            const uploadPath = path.join(
                __dirname,
                "../../../uploads/",
                nombreTemp
            );
            console.log(uploadPath);
            file.mv(uploadPath, (err) => {
                if (err) {
                    throw err;
                }
                uploadFile(uploadPath, "tepsur");
            });
            // const matricula = await Matricula.findOneBy({
            //     uuid: matriculaUuid,
            // });
            // if (!matricula) throw new NotFoundError("La matricula no existe");

            // const newCertificado = new Certificado();
            // newCertificado.uuid = uuid();
            // newCertificado.descripcion = descripcion;

            // newCertificado.url =
            //     "aqui va la url del archivo guardado en azure :v";
            // newCertificado.matricula = matricula;

            // await newCertificado.save();

            // return newCertificado;
            return "true";
        } catch (error) {
            throw error;
        }
    };

    public findByUuid = async (uuid: string): Promise<Certificado> => {
        try {
            const certificado = await Certificado.findOne({
                where: { uuid },
                relations: { matricula: true },
            });
            if (!certificado)
                throw new NotFoundError("El certificado no existe");

            return certificado;
        } catch (error) {
            throw error;
        }
    };

    public listAll = async (): Promise<Certificado[]> => {
        try {
            return Certificado.find({
                relations: {
                    matricula: true,
                },
            });
        } catch (error) {
            throw error;
        }
    };

    public listByMatricula = async (
        matriculaUuid: string
    ): Promise<Certificado[]> => {
        try {
            return Certificado.find({
                relations: {
                    matricula: true,
                },
                where: {
                    matricula: { uuid: matriculaUuid },
                },
            });
        } catch (error) {
            throw error;
        }
    };

    public delete = async (uuid: string): Promise<string> => {
        try {
            const certificado = await Certificado.findOneBy({ uuid });

            if (!certificado)
                throw new NotFoundError("El certificado no existe");

            await deleteImage(certificado.url, "certificados");

            await Certificado.remove(certificado);

            return uuid;
        } catch (error) {
            throw error;
        }
    };
}
