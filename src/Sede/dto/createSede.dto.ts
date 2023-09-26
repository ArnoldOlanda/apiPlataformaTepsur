export class CreateSedeDto {
    nombre: string;
    direccion: {
        direccionExacta: string;
        distrito: string;
        provincia: string;
        departamento: string;
    };
}
