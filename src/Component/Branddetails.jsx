import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import img1 from '../assets/no-products-removebg-preview.png'
import {  FaDollarSign } from 'react-icons/fa';
import SimpleSlider from './Slider';

const Branddetails = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/brand/${brandname}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [brandname]);

  return (
    <div className='bg-black pb-10 '>

<SimpleSlider></SimpleSlider>

      <h1 className="text-3xl py-5 text-red-500">Products by {brandname}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.length > 1 ? (
          products.map((product) => (
            <div key={product._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img className="w-72 h-72" src={product.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Brand Name: {product.brandname}</p>
                <div className="flex justify-between">
                  <p className='flex items-center'>Price:  {product.price} <FaDollarSign></FaDollarSign></p>
                  <p>Rating: {product.rating}</p>
                </div>
                <div className="card-actions justify-center">
                  <Link to={`/singleDeteils/${product._id}`}><button className="btn bg-emerald-800 text-white">Details</button></Link>
                  <button className="btn bg-red-800 text-white">Update</button>
                 
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-screen">
          <div className="text-center ">
              <p>No products found in the {brandname} category..</p>
              <img className="mt-4" src={img1} alt="No products found" />
          </div>
      </div>
      
        )}
      </div>
    </div>
  );
};

export default Branddetails;
