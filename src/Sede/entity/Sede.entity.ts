import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
} from "typeorm";
import { EntityBase } from "../../entity/EntityBase";
import { Direccion } from "../../entity/Direccion.entity";
import { Docente } from "../../Teacher/entity/Docente.entity";
import { Secretaria } from "../../Secretary/entity/Secretaria.entity";
import { Carrera, Grupo, Matricula } from "../../Matricula/entity";
import { Administrador } from "../../entity";

@Entity()
export class Sede extends EntityBase {
    @Column({ unique: true })
    nombre: string;

    @Column({ default: "activo" })
    estado: string;

    @OneToOne(() => Direccion)
    @JoinColumn()
    direccion: Direccion;

    @OneToMany(() => Docente, (docente) => docente.sede)
    docentes: Docente[];

    @OneToMany(() => Secretaria, (secretaria) => secretaria.sede)
    secretarias: Secretaria[];

    @OneToMany(() => Grupo, (grupo) => grupo.sede)
    grupos: Grupo[];

    @OneToMany(() => Administrador, (administrador) => administrador.sede)
    administradores: Administrador[];

    @ManyToMany(() => Carrera)
    @JoinTable()
    carreras: Carrera[];

    @OneToMany(() => Matricula, (matricula) => matricula.sede)
    matriculas: Matricula[];
}
