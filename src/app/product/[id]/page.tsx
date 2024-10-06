import { products } from "@/src/core"

export default function productPage(props: any) {
   const id = +props.params.id
   const product = products.find(item => item.id === id)
   return product ? (<div>{product?.nome}</div>) : <div>Produto não encontrado</div>
}
