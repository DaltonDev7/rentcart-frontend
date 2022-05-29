import { EntityBase } from "./EntityBase";

export interface Inspeccion extends EntityBase {

    TieneRayadura?:boolean
    CantidadCombustible?:string
    Vehiculo?:string;
    Cliente?:string;
    TieneGomaRepuesto?:boolean
    TieneGato?:boolean
    TieneRoturaCristal?:boolean
    IdVehiculo?:boolean
    IdCliente?:boolean
    Fecha?:Date
}