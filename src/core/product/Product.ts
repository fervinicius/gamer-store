import Especifications from "./Especifications"
import Preciable from "./Preciable"

export default interface Product extends Preciable {
   id: number
   nome: string
   descricao: string
   marca: string
   modelo: string
   imagem: string
   videoReview: string  
   nota: number
   tags: string[]
   especifications: Especifications
}
