import './styles.css';
import StepsHeader  from './StepsHeader';
import ProductsList from './ProductList';
import React, { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


function Orders() {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    useEffect(() => {
        fetchProducts().then((response: { data: React.SetStateAction<Product[]>; }) => setProducts(response.data)).catch((error: any) => console.log(error))
        
    }, []) 

    return (
        <div className="orders-container">
           <StepsHeader />
           <ProductsList  products ={ products } />
           <OrderLocation onChangeLocation = {location => setOrderLocation(location)}/>
        </div>
    );
}

export default Orders;