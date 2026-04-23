'use server'

import { revalidatePath } from "next/cache"
import { addToList } from "./product"

export const createPost=async(formData)=>{
    const data=Object.fromEntries(formData)
    console.log(data)

    await addToList(data)
    revalidatePath('/server-action')
}