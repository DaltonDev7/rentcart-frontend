import { EntityBase } from "./EntityBase"

export interface Empleado extends EntityBase {
    Nombres?:string
    Apellidos?:string
    Cedula?:string
    TandaLabor?:string
    PorcientoComision?:string
    FechaIngreso?:Date
}