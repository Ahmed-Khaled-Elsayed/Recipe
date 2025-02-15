
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Details from './Components/Details/Details'
import Error from './Components/Error/Error'
import Layout from './Components/Layout/Layout'
import MealCard from './Components/MealCard/MealCard.jsx'

function App() {
  
  const route = createBrowserRouter([
    {path:"" , element:<Layout/> ,children :[
      {path:"/" , element:<Home/>},
      {path:"/details" , element:<Details/> },
      {path:"*" , element:<Error/>},
    ]}
    
  ]
  )

  return (
    <>
      <RouterProvider router={route} />
      
    </>
  )
}

export default App
