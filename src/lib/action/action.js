import { getProduct } from './../Api/product';

export const product=async()=>{
    return getProduct;
}
export const postProduct=async(newProducts)=>{
    newProducts.id=product.length+1;
    product.push(newProducts);
    return { ok: true, messages: 'Task added successfuly' }
}