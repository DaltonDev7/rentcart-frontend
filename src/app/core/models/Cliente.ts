import { EntityBase } from "./EntityBase";

export interface Cliente extends EntityBase {
    Nombres?: string
    Apellidos?: string
    Cedula?: string
    NoTarjetaCR?: string
    LimiteCredito?: number
    IdTipoPersona?: number
}