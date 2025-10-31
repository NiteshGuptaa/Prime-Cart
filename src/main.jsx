// Import necessary modules and components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ShopContextProvider from './Context/ShopContext.jsx'
import { Provider } from 'react-redux'
import store from './Utils/store.js'
import { ToastContainer } from 'react-toastify'

// Create the root element and render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide the ShopContext to the application */}
    {/* <ShopContextProvider> */}
      {/* Provide the Redux store to the application */}
      <Provider store={store}>
        {/* Render the main App component */}
        <App />
        {/* Render the ToastContainer for notifications */}
        <ToastContainer />
      </Provider>
    {/* </ShopContextProvider> */}
  </StrictMode>,
)
