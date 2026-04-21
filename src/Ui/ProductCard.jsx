import { Button, Card } from "@heroui/react";
// import Image from "next/image";


const ProductCard = ({ product }) => {
    // console.log(product)
    const { title, description, category, brand, price, } = product;
    return (
        <div>
            
            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
                    {/* <Image
                    src={thumbnail}
                    alt={title}
                    width={200}
                    height={250}
                /> */}
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">{title}!</Card.Title>
                        <Card.Description>
                            {description}
                        </Card.Description>
                        <p>{category}</p>
                        <p>{brand}</p>
                        <p>{price}</p>
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground"> 10% Discount</span>
                            <span className="text-xs text-muted">Discount ends Oct 10.</span>
                        </div>
                        <Button className="w-full sm:w-auto">Buy Now</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    )
}

export default ProductCard