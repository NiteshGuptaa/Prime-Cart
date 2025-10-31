import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from './Item'


const ProductsData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw8rju5aEFgF_7IbmRLq2qxztPk0VLFtgfQ&s",
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
      link: "/mensProducts"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw8rju5aEFgF_7IbmRLq2qxztPk0VLFtgfQ&s",
      title: "Mens Fashion",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
      link: "/mensProducts"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_vm_0HyUF0d42SWPeYHqzP2LbZl8XRyt7Q&s",
      title: "Electronics",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
      link: "/electronicProducts"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2neS_-qd0JtLJX5NcSCdV7pyP5Bs0f_Htzw&s",
      title: "Jewellery",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
      link: "/jewelleryProducts"
    },
  ];

const NewCollection = () => {
    // const {new_collections} = useContext(Shopcontext)
  return (
    <div>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>New Collection</h2>
            <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla quis in similique officia, cupiditate fugit mollitia saepe necessitatibus.</p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {ProductsData.map((product) => {
                    return <Item key={product.id} product={product}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default NewCollection
