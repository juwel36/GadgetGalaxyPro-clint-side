import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import BrandsName from "../../Component/BrandsName";
import Trending from "../../Component/Trending";
import CustomerReview from "../../Component/CustomerReview";
import { useState } from "react";


const Home = () => {
  const products=useLoaderData()
  const brandCards = products.slice(0, 6);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
  <div> 
    <div className={`${isDarkMode ? "dark" : "light"}`}>
    
  <div className="flex gap-3">
    <input
      type="checkbox"
      className="toggle"
      checked={isDarkMode}
      onChange={toggleTheme}
    />
    <button onClick={toggleTheme}>
      {isDarkMode ? "To Light Mode" : "To Dark Mode"}
    </button>
  </div>

   <div className="max-w-5xl mx-auto">
    <Banner></Banner>
<BrandsName card={brandCards}></BrandsName>

<Trending></Trending>

<CustomerReview></CustomerReview>
  </div>

<div className="">
<Footer></Footer>
</div>
 </div>
 </div>
  );
};

export default Home;