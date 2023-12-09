import Swal from "sweetalert2";

const AddProduct = () => {

const handleaddProduct = e =>{
e.preventDefault()
const image = e.target.image.value;
const name = e.target.name.value;
const brandname = e.target.brandname.value;
const product = e.target.product.value;
const price = e.target.price.value;
const shortdescription = e.target.shortdescription.value;
const rating = e.target.rating.value;
const brandimage = e.target.brandimage.value;
const userdetails = {
  image,
  name,
  brandname,
  product,
  price,
  shortdescription,
  rating,
  brandimage
};


fetch('https://gadget-galaxy-pro-server-side-ophfrrsrz-ag-juwels-projects.vercel.app/products',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(userdetails)

})
.then(res=> res.json())
.then(data=>{
  console.log(data);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' added suceessfully',
    showConfirmButton: false,
    timer: 1500
  })
 e.target.reset()
})




}


  return (
    <div className="bg-black lg:h-[86vh] max-w-5xl mx-auto pt-10">
      <form onSubmit={handleaddProduct}>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="Image URL" className="input input-bordered"  />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
        </div>
</div>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered"  />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">products</span>
          </label>
          <input type="text" name="product" placeholder="products" className="input input-bordered"  />
        </div>
</div>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type="text" name="shortdescription" placeholder="Short description" className="input input-bordered"  />
        </div>
</div>
<div className="flex flex-col md:flex-row lg:flex-row gap-6">

<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="input input-bordered"  />
        </div>
<div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand Image</span>
          </label>
          <input type="text" name="brandimage" placeholder="Brand image url" className="input input-bordered"  />
        </div>
        
</div>

<input  className="btn w-full mt-7" type="submit" value="Add Product" />



      </form>




    </div>
  );
};

export default AddProduct;