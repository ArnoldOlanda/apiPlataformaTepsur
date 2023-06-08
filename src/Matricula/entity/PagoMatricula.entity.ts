import { Column, Entity, ManyToOne } from "typeorm";
import { EntityBase } from "../../entity";
import { MetodoPago } from "./MetodoPago.entity";

@Entity()
export class PagoMatricula extends EntityBase {
    @Column()
    num_comprobante: string;

    @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.pagos_matricula)
    forma_pago: MetodoPago;

    @Column()
    monto: number;

    @Column({ nullable: true })
    foto_comprobante: string;
}
