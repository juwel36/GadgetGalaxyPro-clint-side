import img1 from '../assets/pngwing.com (4).png'


const Banner = () => {
  return (
    <div>
      <div className='bg-red-700 flex flex-col lg:flex-row justify-center items-center'>
<div className='lg:w-1/2 lg:pl-10'>
<h1 className='text-5xl text-white font-semibold font-mono'>Elevate Your Lifestyle <br /> with Electronics</h1>
<p className='mt-4'>Discover the future of electronics in one place .
Where technology meets affordability.</p>
</div>
<div className='lg:w-1/2'>
  <img className='p-10  lg:w-[700px]' src={img1} alt="" />
</div>



      </div>
    </div>
  );
};

export default Banner;