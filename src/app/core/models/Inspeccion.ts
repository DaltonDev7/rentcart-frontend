import { EntityBase } from "./EntityBase";

export interface Inspeccion extends EntityBase {

    TieneRayadura?:boolean
    CantidadCombustible?:string
    TieneGomaRepuesto?:boolean
    TieneGato?:boolean
    TieneRoturaCristal?:boolean
    IdVehiculo?:boolean
    IdCliente?:boolean
}