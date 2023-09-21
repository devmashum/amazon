import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const { products } = useLoaderData();

    return (
        <div className=' grid grid-cols-3 gap-10 p-5'>
            {
                products?.map(product => <ProductsCard product={product} key={product.id} ></ProductsCard>)
            }
        </div>
    );
};

export default Products;