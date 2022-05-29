import { EntityBase } from "./EntityBase";

export interface RentaDevolucion extends EntityBase {
    FechaRenta?: Date
    FechaDevolucion?: Date
    MontoPorDia?: number
    CantidadPorDia?: number
    CantidadDias?: number
    Comentario?: number
    Cliente?:string;
    Vehiculo?:string;
    Empleado?:string;
}