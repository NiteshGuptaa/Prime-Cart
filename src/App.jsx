import React, { useState } from 'react'
// Importing necessary components and libraries
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import Wishlist from './Pages/Wishlist'
import LoginSignUpForm from './Pages/LoginSignUpForm'
import SearchResultProducts from './Pages/SearchResultProducts'
import Notifications from './Pages/Notifications'
import FAQ from './Pages/FAQ'
import ProtectedRoute from './components/ProtectedRoute'
import Category from './Pages/Category'
import Profile from './Pages/Profile'
import ExploreProduts from './Pages/ExploreProduts'
import auth from './components/firebase'

// Layout component that includes Navbar, Outlet for nested routes, and Footer
const Applayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// Defining routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />, // Main layout for the application
    children: [
      {
        path: "/",
        element: <Home /> // Home page route
      },
      {
        path: "/cart",
        element: (
          // Protected route for Cart page
          <>
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          </>
        ),
      },
      {
        path: "/wishlist",
        element: <Wishlist /> // Wishlist page route
      },
      {
        path: "/explore-products",
        element: <ExploreProduts /> // Explore products page route
      },
      {
        path: "/products/:productId",
        element: <SingleProduct /> // Single product page route
      },
      {
        path: "/searchResultsProducs/:searchQuery",
        element: <SearchResultProducts /> // Search results page route
      },
      {
        path: "/notifications",
        element: <Notifications /> // Notifications page route
      },
      {
        path: "/faqs",
        element: <FAQ /> // FAQ page route
      },
      {
        path: "/category/:category_name",
        element: <Category /> // Category page route
      },
    ]
  },
  {
    path: "/login",
    element: <LoginSignUpForm /> // Login page route
  },
  {
    path: "/signup",
    element: <LoginSignUpForm /> // Signup page route
  },
  {
    path: "/profile",
    element: (
      // Protected route for Profile page
      <>
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      </>
    )
  },
])

// Main App component that provides the router
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
