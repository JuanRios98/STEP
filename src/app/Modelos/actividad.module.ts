export interface Actividad {
    id: number;
    proyectoId: Number;
    nit: number;
    usuarioId: number;
    actividad: string;
    fechaInicio: Date;
    fechaFin: Date;
    fechaRealCierre: Date;
    estado: number


}