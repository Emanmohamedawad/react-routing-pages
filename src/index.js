import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Notfoundpage from './Pagenotfound/Notfoundpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
let Routes =createBrowserRouter([
  {
  path: "/", element: <App/>, errorElement:<Notfoundpage/>, children:[
  {index:true, element:<Home/>},
  {path: 'portfolio', element:<Portfolio/>},
  {path: 'about', element:<About/>},
  {path: 'contact', element:<Contact/>},
  {path: '*', element:<Notfoundpage/>},
]
}
])
root.render(
  <RouterProvider router={Routes}/>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

