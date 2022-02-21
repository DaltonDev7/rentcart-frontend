import { Rol } from "./rol.model";


export interface Usuario {
    Id?:number;
    Nombres?:string;
    Apellidos?:string;
    Email?:string;
    UserName?:string;
    Password?:string;
    IdSexo?:number;
    ImagenPerfil?:string;
    Roles:  Rol[]
}