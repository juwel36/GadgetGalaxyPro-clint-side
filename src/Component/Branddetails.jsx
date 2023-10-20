import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import img1 from '../assets/no-products-removebg-preview.png';
import { FaDollarSign } from 'react-icons/fa';
import Rating from 'react-rating-stars-component'; 
import SimpleSlider from './Slider';

const Branddetails = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/products/brand/${brandname}`)
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.length > 1 ? (
          products.map((product) => (
            <div key={product.id} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img src={product.image} alt="image" className="object-cover h-60" />
              </div>
              <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-600 uppercase">
                  {product.brandname}
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {product.name}
                </h4>
                <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 flex items-center">
                  {product.price} <FaDollarSign></FaDollarSign>
                </p>
                <div className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700 flex items-center">
                  <Rating
                    count={5}
                    value={product.rating} 
                    size={24}
                    activeColor="#ffd700"
                    edit={false} 
                  />
                </div>
                <div className='flex gap-2 mt-4'>
                  <Link to={`/singleDeteils/${product._id}`}>
                    <button className="btn bg-emerald-800 text-white">Details</button>
                  </Link>
                  <Link to={`/update/${product._id}`}>
                    <button className="btn bg-red-800 text-white">Update</button>
                  </Link>
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
