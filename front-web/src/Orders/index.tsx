import './styles.css';
import StepsHeader  from './StepsHeader';
import ProductsList from './ProductList';
import React, { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';


function Orders() {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    
    useEffect(() => {
        fetchProducts().then((response: { data: React.SetStateAction<Product[]>; }) => setProducts(response.data)).catch((error: any) => console.log(error))
      
    }, []) 

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    return (
        <>
            <div className="orders-container">
           <StepsHeader />
           <ProductsList  products ={ products } onSelectProduct={handleSelectProduct}/>
           <OrderLocation onChangeLocation = {location => setOrderLocation(location)}/>
           <OrderSummary />
            </div>
            <Footer />
        </>
    );
}

export default Orders;