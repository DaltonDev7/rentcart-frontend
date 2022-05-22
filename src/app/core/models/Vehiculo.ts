import { EntityBase } from "./EntityBase";

export interface Vehiculo extends EntityBase {
    Descripcion?:string
    NoChasis?:string
    NoMotor?:string
    NoPlaca?:string
    IdTipoVehiculo?:number
    IdTipoCombustible?:number
    IdModelo?:number
}