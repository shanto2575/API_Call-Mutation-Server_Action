export const getProduct=async()=>{
    const res=await fetch('http://localhost:3004/products',
        {
            next:{revalidate:30},
            cache:'force-cache'
        }
    )
    if(!res.ok){
        throw new Error('failed to Fetch')
    }
    return res.json()
    
}

