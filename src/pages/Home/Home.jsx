import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import BrandsName from "../../Component/BrandsName";


const Home = () => {
  const products=useLoaderData()
  const brandCards = products.slice(0, 6);

  return (
    <div className="bg-gray-900">
      <Banner></Banner>
<BrandsName card={brandCards}></BrandsName>
<Footer></Footer>
    </div>
  );
};

export default Home;