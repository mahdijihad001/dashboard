import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Component/Home/Home';
import ItemCetagory from './Component/ItemPage/ItemCetagory';
import NewItem from './Component/ItemPage/ItemCetagoryList';
import ItemList from './Component/ItemPage/ItemList';
import MarginSetting from './Component/ItemPage/MarginSetting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/itemcetagory",
        element : <ItemCetagory/>
      },
      {
        path : "/newItem",
        element : <NewItem/>
      },
      {
        path : "/itemList",
        element : <ItemList/>
      },
      {
        path : "/marginSetting",
        element : <MarginSetting/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
