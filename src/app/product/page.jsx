import React from 'react'
import { getProduct } from '../../lib/Api/product'
import ProductCard from '../../Ui/ProductCard'
import { Magnifier } from '@gravity-ui/icons';
import ADDProduct from './new/page';
import { createProduct } from '../../lib/action/product';

const ProductPage = async () => {
    const product = await getProduct()
    console.log(product)
    return (
        <div>
            <div className="w-2/12 border border-orange-800 rounded-2xl flex items-center p-3 m-10">
                <Magnifier></Magnifier>
                <input type="text" className=' outline-none px-5' />
                <button className='hover:scale-95 border-l border-orange-800 pl-2 rounded-2xl'>Search</button>
            </div>
            <div className='m-5'>
                <ADDProduct createProduct={createProduct}></ADDProduct>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5'>
                {
                    product.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default ProductPage