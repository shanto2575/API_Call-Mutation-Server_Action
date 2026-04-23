
export const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    return res.json()
}


export const addProduct = async (newProduct) => {
    const res = await fetch('http://localhost:5000/products', {
        method: "POST",              
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
    });

    return res.json();
};