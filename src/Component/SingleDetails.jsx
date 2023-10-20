import { FaCartArrowDown, FaDollarSign } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SingleDetails = () => {
  const navigate=useNavigate()
const singledata=useLoaderData()

const {image,
  name,
  brandname,
  price,
  shortdescription,
  }=singledata

  const handleAddToCart = async () => {
    const response = await fetch('https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(singledata),
    });
    
    if (response.ok) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Add on Cart',
        showConfirmButton: false,
        timer: 2500
      })
    
      navigate('/')
     
    }
  };


  return (
   
   <div className="flex flex-col md:flex-col lg:flex-row items-center  bg-slate-900 h-[86vh] ">

<div className="lg:w-1/2">
<img className="w-96 pl-2 lg:pl-28 mt-20 " src={image} alt="" />
</div>
<div className="lg:w-1/2 p-3 lg:p-0">
<p className="text-4xl pb-7 text-red-600"> {name} </p>
<p className="text-2xl"> Brand Name: {brandname} </p>
<p className="flex items-center my-4"> Price: {price} <FaDollarSign></FaDollarSign> </p>
<p> {shortdescription} </p>
 
<button onClick={handleAddToCart} className="btn btn-primary mt-5">Add to Cart <FaCartArrowDown></FaCartArrowDown> </button>
</div>
      
    </div>
  );
};

export default SingleDetails;