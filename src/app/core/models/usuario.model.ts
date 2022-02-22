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
    ImagenDefecto?:boolean
    ImageFile?:string
    Roles:  Rol[]
}