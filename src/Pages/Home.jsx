import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MultiBanner from '../components/MultiBanner'
import NewCollection from '../components/NewCollection'
import MidBanner from '../components/MidBanner'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'
import TopCategory from '../components/TopCategory'
import FirstDivToShow from '../components/FirstDivToShow'
import Furnitures from './Furnitures'
import HomeDecoration from './HomeDecoration'
import KitchenAccessories from './KitchenAccessories'
import Groceries from './Groceries'
import Vehicles from './Vehicles'
import LastDivToShow from '../components/LastDivToShow'

const Home = () => {
  return (
    <div className='bg-gray-100 pt-10'>
      {/* Hero Banner Section */}
      <HeroBanner/>
      {/* <MultiBanner/> */}
      {/* First Div to Show Section */}
      <FirstDivToShow />
      {/* Top Category Section */}
      <TopCategory />
      {/* Home Decoration Section */}
      <HomeDecoration />
      {/* Kitchen Accessories Section */}
      <KitchenAccessories />
      {/* Furnitures Section */}
      <Furnitures />
      {/* Groceries Section */}
      <Groceries />
      {/* Vehicles Section */}
      <Vehicles />
      {/* Last Div to Show Section */}
      <LastDivToShow />
      {/* <NewCollection/> */}
      {/* Mid Banner Section */}
      <MidBanner/>
      {/* Top Sellers Section */}
      <TopSellers/>
      {/* Features Section */}
      <Features/>
    </div>
  )
}

export default Home
