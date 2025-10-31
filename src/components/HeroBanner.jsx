// import React from 'react'
// import banner from '../assets/HeroBanner.jpg'
// import grocery from '../assets/grocery.jpeg'
// import iphone from '../assets/iphone.jpeg'
// import furniture from '../assets/furniture.jpeg'
// import girlsTop from '../assets/girlsTop.jpeg'
// import smartphones from '../assets/smartphones.jpeg'
// import earbuds from '../assets/earbuds.jpeg'
// import { Link } from 'react-router-dom'


// const BannerDetails = [
//   {
//      id: 0,
//      mainTitle: 'Bringing the Mall to Your Fingertips!',
//      subTitle: 'Discover a world of endless possibilities — shop smarter, live better',
//      imageUrl : banner,
//      link: '/explore-products'    
//   },
//   {
//     id: 1,
//     mainTitle: 'Grocery',
//     subTitle: 'Get your daily essentials delivered to your doorstep',
//     imageUrl : grocery,
//     link: '/category/grocery'
//   },
//   {
//     id: 2,
//     mainTitle: 'Earbuds',
//     subTitle: 'Get the best deals on earbuds',
//     imageUrl : earbuds,
//     link: '/category/earbuds'
//   },
//   {
//     id: 3,
//     mainTitle: 'Furniture',
//     subTitle: 'Get the best deals on furniture',
//     imageUrl : furniture,
//     link: '/category/furniture'
//   },
//   {
//     id: 4,
//     mainTitle: 'Girls Top',
//     subTitle: 'Get the best deals on Girls Top',
//     imageUrl : girlsTop,
//     link: '/category/girls-top',
//   },
//   {
//     id: 5,
//     mainTitle: 'Smartphones',
//     subTitle: 'Get the best deals on Smartphones',
//     imageUrl : smartphones,
//     link: '/category/smartphones'
//   }
// ]

// const HeroBanner = () => {
//   // this is the here banner page data
//   return (
//     <div className='bg-gray-100 lg:pt-10 pt-1'>
//       <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{ backgroundImage: `url(${BannerDetails[0].imageUrl})`, backgroundPosition: 'Top' }}>
//         <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
//           <div className='text-center text-white px-4'>
//             <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>{BannerDetails[0].mainTitle}</h1>
//             <p className='text-lg md:text-xl mb-6'>{BannerDetails[0].subTitle}</p>
//             <Link to={BannerDetails[0].link }>
//               <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner





import React, { useState, useEffect } from 'react';
import banner from '../assets/HeroBanner.jpg';
import grocery from '../assets/grocery.jpeg';
import smartPhones from '../assets/smartphones.jpeg';
import furniture from '../assets/furniture.jpeg';
import girlsTop from '../assets/girlsTop.jpeg';
import smartphones from '../assets/smartphones.jpeg';
import mobileAccessories from '../assets/mobile-accessories.jpg';
import { Link } from 'react-router-dom';

const BannerDetails = [
  {
    id: 0,
    mainTitle: 'Mobile Accessories',
    subTitle: 'Get the best deals on mobileAccessories',
    imageUrl: mobileAccessories,
    link: '/category/mobile-accessories'
  },

  {
    id: 1,
    mainTitle: 'Grocery',
    subTitle: 'Get your daily essentials delivered to your doorstep',
    imageUrl: grocery,
    link: '/category/groceries'
  },
  {
    id: 2,
    mainTitle: 'Bringing the Mall to Your Fingertips!',
    subTitle: 'Discover a world of endless possibilities — shop smarter, live better',
    imageUrl: banner,
    link: '/explore-products'
  },
  {
    id: 3,
    mainTitle: 'Classical Furniture',
    subTitle: 'Get the best deals on furniture',
    imageUrl: furniture,
    link: '/category/furniture'
  },
  {
    id: 4,
    mainTitle: 'Girls Top',
    subTitle: 'Get the best deals on Girls Top',
    imageUrl: girlsTop,
    link: '/category/tops',
  },
  {
    id: 5,
    mainTitle: 'Smartphones',
    subTitle: 'Get the best deals on Smartphones',
    imageUrl: smartphones,
    link: '/category/smartphones'
  },
  {
    id: 6,
    mainTitle: 'Smartphones',
    subTitle: 'Get the best deals on Smartphones',
    imageUrl: smartPhones,
    link: '/category/smartphones'
  }
];

const HeroBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % BannerDetails.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentBanner = BannerDetails[currentBannerIndex];

  return (
    <div className='bg-gray-100 lg:pt-10 pt-1'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]' style={{ backgroundImage: `url(${currentBanner.imageUrl})`, backgroundPosition: 'Top' }}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>{currentBanner.mainTitle}</h1>
            <p className='text-lg md:text-xl mb-6'>{currentBanner.subTitle}</p>
            <Link to={currentBanner.link}>
              <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
