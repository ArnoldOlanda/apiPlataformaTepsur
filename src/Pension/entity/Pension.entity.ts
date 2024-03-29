import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Grupo, Matricula } from "../../Matricula/entity";
import { EntityBase } from "../../entity";
import { PagoPension } from "./PagoPension.entity";
import { EstadoPagoPension } from "../../interfaces/enums";

@Entity()
export class Pension extends EntityBase {
    @ManyToOne(() => Matricula, (matricula) => matricula.pensiones)
    matricula: Matricula;

    @ManyToOne(() => Grupo, (grupo) => grupo.pensiones)
    grupo: Grupo;

    @Column({ nullable: true })
    mes: number;

    @Column()
    fecha_limite: Date;

    @Column()
    monto: number;

    @Column()
    restante: number;

    @Column({ type: "varchar", default: EstadoPagoPension.PENDIENTE })
    estado: EstadoPagoPension;

    @OneToMany(() => PagoPension, (pagoPension) => pagoPension.pension)
    pago_pensiones: PagoPension[];
}
