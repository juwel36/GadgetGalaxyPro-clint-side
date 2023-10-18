

const BrandsName = ({card}) => {
  

  return (
    <div>
      <p className="text-5xl text-red-600 font-mono my-10 text-center"> Top Brands</p>
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-4" >
        {
          card.map(item=> (
<div className="bg-black flex flex-col items-center rounded-lg"  key={item._id}>
<div><img className="h-40 w-64" src={item.brandimage} alt="" /></div>
<p className="text-3xl text-white text-center font-semibold pb-2"> {item.brandname} </p>

</div>


          ) )
        }
      </div>
    </div>
  );
};

export default BrandsName;