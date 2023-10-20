
import { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Rating from 'react-rating-stars-component'; 


const Cart = () => {
  
const cartdetails =useLoaderData()
const [cartItems,setcartitems]=useState(cartdetails)




const handleremove = (id) =>{
  console.log(id);

 
fetch(`https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/cart/${id}`,{
method:'DELETE',
})
.then(res=> res.json())
.then(data=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' Delete succesfully',
    showConfirmButton: false,
    timer: 2000
  })
  console.log(data);

setcartitems((prevUser) => prevUser.filter((item) => item._id !== id));
})
}

  return (
    <div className='max-w-5xl mx-auto'>
      <h2 className='text-3xl py-6 text-red-500'>Cart Contents</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {cartItems.map((item, index) => (
          <div key={index} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={item.image}
      alt="image"
      className="object-cover  h-60"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-600 uppercase">
     {item.brandname}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {item.name}
    </h4>
    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 flex items-center">
      {item.price} <FaDollarSign></FaDollarSign>
    </p>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700 flex items-center">
    <Rating
                    count={5}
                    value={item.rating} 
                    size={24}
                    activeColor="#ffd700"
                    edit={false} 
                  />
    </p>
    <a className="inline-block" href="#">
    
      <button 
    onClick={()=>handleremove(item._id)}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Delete 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
