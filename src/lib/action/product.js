import { revalidatePath } from "next/cache"
import { postProduct } from "./action"

export const createProduct=async(FormData)=>{
    'use server'
    const newProduct=Object.fromEntries(FormData)
    console.log(newProduct)

    const res=await postProduct(newProduct)
    if(res.ok){
        revalidatePath('/product')
    }
    return res;
}