import { Direccion} from "./direccion.module";

export interface Cliente{
    nit: number,
    nombre: string,
    nombreContacto: string,
    contacto: string,
    estado: number,
    direccion: Direccion[]
}


