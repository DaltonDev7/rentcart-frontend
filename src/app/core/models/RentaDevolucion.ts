import { EntityBase } from "./EntityBase";

export interface RentaDevolucion extends EntityBase {
    FechaRenta?: Date
    FechaDevolucion?: Date
    MontoPorDia?: number
    CantidadPorDia?: number
    Comentario?: number
}