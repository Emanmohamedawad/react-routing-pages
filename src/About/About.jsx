import React from 'react';
import './aboutStyle.css';

export default function About() {
  return (
    <div className='about py-5'>
      <div className='container'>
      <div className='header text-center'>
            <h1>ABOUT</h1>
            <div className='star d-flex justify-content-center m-4'>
            <svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </div>
         </div>
         <div className='row px-5'>
            <div className='col-md-6 px-5'>
               <h5>
               Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </h5>
            </div>
            <div className='col-md-6 px-5'>
               <h5>
               Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </h5>
            </div>
         </div>
      </div>
    </div>
  )
}