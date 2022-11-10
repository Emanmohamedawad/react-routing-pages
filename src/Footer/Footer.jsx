import React from 'react'
import './footerStyle.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container py-5 '>
         <div className='row'>
            <div className='col-md-4 text-center'>
               <h3 className='mb-3'>LOCTION</h3>
               <h6>2215 John Daniel Drive</h6>
               <h6>Clark, MO 65243</h6>
            </div>
            <div className='col-md-4 text-center'>
               <h3 className='mb-3'>AROUND THE WEB</h3>
               <div className='icons d-flex justify-content-center'>
                  <div className='icon-box'>
                  <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className='icon-box'>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className='icon-box'>
                  <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className='icon-box'>
                  <i class="fa-solid fa-globe"></i>
                  </div>
               </div>
            </div>

            <div className='col-md-4 text-center'>
               <h3 className='mb-3'>ABOUT FREELANCER</h3>
               <h5 className='text-center'>
               Freelance is a free to use, MIT<br/> licensed Bootstrap theme created by <br/> Route.
               </h5>
            </div>
         </div>

      </div>
      <div className='copy-right text-center'>
            <h6>Copyright © Your Website 2021</h6>
         </div>
    </div>
  )
}
