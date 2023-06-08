import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { EntityBase } from "../../entity/EntityBase";
import { Direccion } from "../../entity/Direccion.entity";
import { Docente } from "../../Teacher/entity/Docente.entity";
import { Secretaria } from "../../Secretary/entity/Secretaria.entity";
import { Matricula } from "../../Matricula/entity";

@Entity()
export class Sede extends EntityBase {
    @Column({ unique: true })
    nombre: string;

    @OneToOne(() => Direccion)
    @JoinColumn()
    direccion: Direccion;

    @OneToMany(() => Docente, (docente) => docente.sede)
    docentes: Docente[];

    @OneToMany(() => Secretaria, (secretaria) => secretaria.sede)
    secretarias: Secretaria[];

    @OneToMany(() => Matricula, (matricula) => matricula.sede)
    matriculas: Matricula[];
}
