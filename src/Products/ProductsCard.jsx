import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {

    const { title, price, brand, thumbnail, description, id
    } = product;
    console.log(product)
    return (
        <div className=' w-90 h-90'>

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg max-h-20" src={product.thumbnail
                } alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <h2>Price: {price} $</h2>
                    <Link to={`/product/${id}`}> <button className=' w-full bg-slate-400 rounded-xl'>Buy Now</button></Link>
                </div>
            </a>

        </div>
    );
};

export default ProductsCard;