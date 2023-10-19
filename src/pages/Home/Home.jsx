import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import BrandsName from "../../Component/BrandsName";
import Trending from "../../Component/Trending";


const Home = () => {
  const products=useLoaderData()
  const brandCards = products.slice(0, 6);

  return (
   <div>
     <div className=" max-w-5xl mx-auto">
      <Banner></Banner>
<BrandsName card={brandCards}></BrandsName>

<Trending></Trending>
    </div>

<div className="">
<Footer></Footer>
</div>
   </div>
  );
};

export default Home;