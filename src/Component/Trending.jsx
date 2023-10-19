import { useEffect, useState } from "react";
import {  FaCartArrowDown, FaDollarSign, FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/trending')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
  }, []);

  return (
    <div>
<p className="text-5xl font-mono text-red-600 text-center p-10"> Trending Products </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data ? (
          data.map(item => (
            <div className="border flex flex-col items-center bg-slate-50 p-3 rounded-md text-black" key={item._id}>
             
<div>
  <img className="h-56 " src={item.image} alt="" />
</div>
<div className="">
<p className="text-xl  font-semibold">{item.name}</p>
<div className="flex items-center gap-1 mt-2">
  <p className="text-xs text-slate-500 flex items-center"> <FaDollarSign></FaDollarSign>  {item.price} </p>
  <p className="font-semibold flex items-center"> <FaDollarSign></FaDollarSign>  {item.price2} </p>
</div>
<div className="flex items-center justify-center gap-4 pt-4">
  <span> <FaEye></FaEye> </span>
  <span><FaCartArrowDown></FaCartArrowDown> </span>
  <span> <FcLike></FcLike> </span>
</div>
</div>


            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
