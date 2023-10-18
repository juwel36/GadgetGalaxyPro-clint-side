import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import BrandsName from "../../Component/BrandsName";


const Home = () => {
  const products=useLoaderData()

  return (
    <div>
      <Banner></Banner>
<BrandsName card={products}></BrandsName>
<Footer></Footer>
    </div>
  );
};

export default Home;