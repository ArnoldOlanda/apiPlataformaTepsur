export interface ModuleDTO {
    nombre: string;
    duracionSemanas: string;
}

export interface CareerDTO {
    numModulos: number;
    nombre: string;
    modulos: ModuleDTO[];
    modalidad: string;
}

export interface GroupDTO {
    nombre: string;
    fechaInicio: Date;
    horarioUuid: string;
    carreraUuid: string;
    docenteUuid: string;
}

enum ScheduleDays {
    "L-V" = "L-V",
    "S-D" = "S-D",
}

enum Turno {
    "Mañana" = "Mañana",
    "Tarde" = "Tarde",
}

export interface ScheduleDTO {
    turno: Turno;
    dias: ScheduleDays;
    horaInicio: number;
    horaFin: number;
}

export type UpdateScheduleDTO = Partial<ScheduleDTO>;

export interface MatriculaDTO {
    alumno: AlumnoData;
    carreraUuid: string;
    moduloUuid: string;
    grupoUuid: string;
    secretariaUuid: string;
    sedeUuid: number;
    pagoMatricula: PagoMatriculaData;
    fechaInscripcion: Date;
    fechaInicio: Date;
}

export interface AlumnoData {
    dni: string;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    sexo: "m" | "f";
    edad: number;
    gradoEstudiosUuid: string;
    lugarNacimiento: string;
    celular: string;
    correo: string;
    direccion: DireccionData;
}

export interface DireccionData {
    direccionExacta: string;
    distrito: string;
    provincia: string;
    departamento: string;
}

export interface PagoMatriculaData {
    numComprobante: string;
    formaPagoUuid: string;
    monto: number;
}

export interface GradoEstudiosDTO {
    descripcion: string;
}
