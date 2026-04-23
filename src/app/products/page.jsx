import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { handleProduct } from './../../lib/action/action';
import { getProducts } from "../../api/product";

const Products = async () => {
    const products = await getProducts()
    // console.log(products)
    return (
        <div>
            <h2 className='text-4xl text-center my-5 font-bold text-red-600'>Products</h2>
            <div>
                <Modal>
                    <Button variant="secondary">Open Product Form</Button>
                    <Modal.Backdrop>
                        <Modal.Container placement="auto">
                            <Modal.Dialog className="sm:max-w-md">
                                <Modal.CloseTrigger />
                                <Modal.Header>
                                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                        <Envelope className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading>Add to Product </Modal.Heading>
                                    <p className="mt-1.5 text-sm leading-5 text-muted">
                                        Fill out the form below and well get back to you. The modal adapts automatically
                                        when the keyboard appears on mobile.
                                    </p>
                                </Modal.Header>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <form action={handleProduct} className="flex flex-col gap-4">
                                            <TextField className="w-full" name="title" type="text">
                                                <Label>Title</Label>
                                                <Input placeholder="Enter your Title" />
                                            </TextField>
                                            <TextField className="w-full" name="brand" type="text">
                                                <Label>Brand</Label>
                                                <Input placeholder="Enter your Brand" />
                                            </TextField>
                                            <TextField className="w-full" name="category" type="text">
                                                <Label>Category</Label>
                                                <Input placeholder="Enter your category" />
                                            </TextField>
                                            <TextField className="w-full" name="description">
                                                <Label>Description</Label>
                                                <Input placeholder="Enter your Description" />
                                            </TextField>
                                            <TextField className="w-full" name="price" type="number">
                                                <Label>Price</Label>
                                                <Input placeholder="Enter your Price" />
                                            </TextField>
                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                                <Button type="submit" slot="close">ADD PRODUCT</Button>
                                            </Modal.Footer>
                                        </form>
                                    </Surface>
                                </Modal.Body>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mx-10'>
                {
                    products.map(product => <div key={product.id} className='border rounded-2xl p-5 space-y-4'>
                        <h2 className='text-2xl font-bold '>{product.title}</h2>
                        <p>{product.brand}</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <p className='text-2xl font-bold text-green-500'>${product.price}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Products