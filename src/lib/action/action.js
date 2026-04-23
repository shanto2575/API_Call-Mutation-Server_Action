'use server'
import { addProduct } from "./product"
import { revalidatePath } from "next/cache"

export const handleProduct=async(formData)=>{
    const data=Object.fromEntries(formData)
    console.log(data)
    // const{title,brand,category,description,price}=data

    // await addProduct({title,brand,category,description,price})
    await addProduct(data)
    revalidatePath('/products')

}