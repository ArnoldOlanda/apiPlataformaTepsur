import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { EntityBase } from "../../entity/EntityBase";
import { Usuario } from "../../Auth/entity/Usuario.entity";
import { Sede } from "../../Sede/entity/Sede.entity";

@Entity()
export class Administrador extends EntityBase {
    @Column({ length: 8, unique: true })
    dni: string;

    @Column()
    nombres: string;

    @Column()
    ape_paterno: string;

    @Column()
    ape_materno: string;

    @Column({ nullable: true, length: 9 })
    celular: string;

    @Column({ nullable: true })
    correo: string;

    @Column({ nullable: true, default: true })
    estado: boolean;

    @OneToOne(() => Sede, (sede) => sede.administrador)
    sede: Sede;

    @OneToOne(() => Usuario, { nullable: true })
    @JoinColumn()
    usuario: Usuario;
}
