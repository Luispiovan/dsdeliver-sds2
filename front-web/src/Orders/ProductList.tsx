import ProductCard from "./ProductCard";
import { Product } from "./Types";

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, onSelectProduct }: Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-itens">
                { products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        onSelectProduct={onSelectProduct}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;