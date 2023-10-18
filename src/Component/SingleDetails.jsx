import { FaCartArrowDown, FaDollarSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const SingleDetails = () => {
const singledata=useLoaderData()
const {image,
  name,
  brandname,
  price,
  shortdescription,
  }=singledata

  return (
   
   <div className="flex flex-col md:flex-row lg:flex-row items-center  bg-slate-900 h-[86vh]">

<div className="lg:w-1/2">
<img className="w-96 pl-2 lg:pl-28 mt-20 " src={image} alt="" />
</div>
<div className="lg:w-1/2 p-3 lg:p-0">
<p className="text-4xl pb-7 text-red-600"> {name} </p>
<p className="text-2xl"> Brand Name: {brandname} </p>
<p className="flex items-center my-4"> Price: {price} <FaDollarSign></FaDollarSign> </p>
<p> {shortdescription} </p>
 
<button className="btn btn-primary mt-5">Add to Cart <FaCartArrowDown></FaCartArrowDown> </button>
</div>
      
    </div>
  );
};

export default SingleDetails;