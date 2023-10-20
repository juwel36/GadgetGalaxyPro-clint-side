import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate()
  const productDetails=useLoaderData()
  console.log(productDetails);
  const {_id,image,name,brandname,product,price,rating}=productDetails;


const handleupdate = e =>{
e.preventDefault();
const image = e.target.image.value;
const name = e.target.name.value;
const brandname = e.target.brandname.value;
const product = e.target.product.value;
const price = e.target.price.value;
const rating = e.target.rating.value;
const userdetails = {image,name,brandname,product,price,rating};
console.log(userdetails);

 
fetch(`https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/products/${_id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
   body: JSON.stringify(userdetails)

})
.then(res=> res.json())
 .then(data=>{
if(data.modifiedCount > 0){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your Updateded Succesfully',
    showConfirmButton: false,
    timer: 3000
  })
  navigate('/')

}
})




}


  return (
    <div>
       <div className="bg-black lg:h-[86vh] pt-10 max-w-5xl mx-auto">
        <p className="text-2xl mb-8">Update Your Information :</p>
      <form onSubmit={handleupdate}>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="Image URL" className="input border-red-700" defaultValue={image}  />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input border-red-700" defaultValue={name} />
        </div>
</div>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" name="brandname" placeholder="Brand Name" className="input border-red-700" defaultValue={brandname}  />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">products</span>
          </label>
          <input type="text" name="product" placeholder="products" className="input border-red-700" defaultValue={product} />
        </div>
</div>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input border-red-700" defaultValue={price}/>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="input border-red-700" defaultValue={rating} />
        </div>
</div>


<input  className="btn w-full mt-7 border-green-700" type="submit" value="Update" />



      </form>




    </div>
    </div>
  );
};

export default Update;