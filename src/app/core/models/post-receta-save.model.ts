import { Post } from "./post.model";


export interface PostRecetaSave {
    PostReceta?: Post
    Ingredientes?: string[]
    PasosRecetas?: string[]
}