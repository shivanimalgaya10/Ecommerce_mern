import React from 'react';

import App from '../App';
import {createBrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';

const  router = createBrowserRouter([
  {
    path :"/",
    element : <App/>,
    children :[
        {
            path :"",
            element :<Home/>
        },{
          path:"login",
          element:<Login/>
        },
        {
        path :"forgot-password",
        element:<ForgotPassword/>

        },
        {
          path :"sign-up",
          element:<SignUp/>
  
          },
          {
            path :"sign-up",
            element:<SignUp/>
    
           },
           {
            path:"admin-panel",
            element:<AdminPanel/>
           }

    ]

  }
])

export default   router


