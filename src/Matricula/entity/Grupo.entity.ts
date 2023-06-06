import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { EntityBase } from "../../entity/EntityBase";
import { Carrera } from "./Carrera.entity";
import { Horario } from "./Horario.entity";
import { Docente } from "../../Teacher/entity/Docente.entity";
import { Matricula } from "./Matricula.entity";

@Entity()
export class Grupo extends EntityBase {
    @Column({ unique: true })
    uuid: string;

    @Column()
    nombre: string;

    @Column()
    fecha_inicio: Date;

    @Column({ default: "ABIERTO" }) //EN_CURSO CERRADO
    estado: string;

    //@Column()
    //cupos_maximos: number

    @ManyToOne(() => Horario, (horario) => horario.grupos)
    horario: Horario;

    @ManyToOne(() => Carrera, (carrera) => carrera.grupos)
    carrera: Carrera;

    @ManyToOne(() => Docente, (docente) => docente.grupos)
    docente: Docente;

    @OneToMany(() => Matricula, (matricula) => matricula.carrera, {
        nullable: true,
    })
    matriculas: Matricula[];
}
