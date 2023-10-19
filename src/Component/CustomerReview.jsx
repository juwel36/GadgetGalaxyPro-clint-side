// import React, { useEffect, useState } from "react";
// import Swiper from "swiper/bundle"; // Import the Swiper bundle
// import "swiper/css/swiper.min.css"; // Import the Swiper CSS
// import "swiper.min.css";


// const CustomerReview= () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/review")
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//       });
//   }, []);

//   useEffect(() => {
//     const swiper = new Swiper(".swiper-container", {
//       // Swiper options here
//       slidesPerView: "auto", // Adjust this to the number of slides you want to show
//       spaceBetween: 10, // Adjust the spacing between slides
//       // Add more options as needed
//     });

//     return () => {
//       swiper.destroy(true, true);
//     };
//   }, []);

//   return (
//     <div>
//       <p className="text-5xl font-mono text-red-600 text-center p-10">
//         Trending Products
//       </p>

//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           {data ? (
//             data.map((item, index) => (
//               <div key={index} className="swiper-slide">
//                 {/* Render your product item here */}
//               </div>
//             ))
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;


// import React from 'react';

const CustomerReview = () => {
  return (
    <div>
      
    </div>
  );
};

export default CustomerReview;