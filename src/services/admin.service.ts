import { v4 as uuid } from "uuid";
import { Rol, Usuario } from "../Auth/entity";
import { Administrador } from "../entity";
import { DatabaseError } from "../errors/DatabaseError";
import { UserEntity } from "../interfaces/entities";
import { AdministratorSchema } from "../interfaces/schemas";

export class AdministratorService {
    public async register({
        dni,
        apeMaterno,
        apePaterno,
        nombres,
        celular,
        correo,
    }: AdministratorSchema) {
        try {
            const newAdministrator = new Administrador();
            newAdministrator.dni = dni;
            newAdministrator.uuid = uuid();
            newAdministrator.nombres = nombres;
            newAdministrator.ape_materno = apeMaterno;
            newAdministrator.ape_paterno = apePaterno;
            newAdministrator.celular = celular;
            newAdministrator.correo = correo;

            return await newAdministrator.save();
        } catch (error: any) {
            console.log(error);
            throw new DatabaseError(error, 500, "DatabaseError");
        }
    }

    public async createUser({
        adminUuid,
        codRol,
        password,
        usuario,
    }: UserEntity & { adminUuid: string }) {
        try {
            const administrator = await Administrador.findOneBy({
                uuid: adminUuid,
            });
            if (administrator) {
                const newUser = new Usuario();
                const role = await Rol.findOneBy({ uuid: codRol });

                newUser.uuid = uuid();
                newUser.usuario = usuario;
                newUser.password = password;
                newUser.rol = role!;

                const savedUser = await newUser.save();
                administrator.usuario = savedUser;

                return await administrator.save();
            }
        } catch (error) {
            console.log(error);
            throw new Error("Error creando el usuario para el administrador");
        }
    }
    public async searchByUser(usuario: Usuario) {
        try {
            const adminExists = await Administrador.createQueryBuilder("a")
                .innerJoinAndSelect("a.usuario", "u")
                .innerJoinAndSelect("u.rol", "r")
                .where("u.uuid= :id", { id: usuario.uuid })
                .getOne();
            return adminExists || null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
