import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);


  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    <div className="p-8 lg:p-0" >
      <p className="text-4xl text-red-600 py-10 text-center "> Our Good Customers</p>
      {data.length > 0 && (
        <Slider {...sliderSettings}>
          {data.map((review) => (
            <div className="w-24 h-64 lg:p-6  flex  flex-col justify-center items-center rounded-2xl bg-gray-900" key={review.id}>
              <div className="flex justify-center">  <img className="rounded-full w-16" src={review.image} alt="" />
              </div>           
               <div className="flex flex-col items-center justify-center">
                
                <h2 className="text-xl text-red-600 font-semibold ">{review.name}</h2>
                <p className="text-white">{review.short_review}</p>
                <p className="text-sm pt-2 text-white"> {review.date}</p>
                
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CustomerReview;
