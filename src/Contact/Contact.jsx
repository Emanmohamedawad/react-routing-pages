import React from 'react';
import './contactStyle.css';

export default function Contact() {
  return (
    <div className='contact py-5'>
      <div className='container justify-content-center'>
      <div className='header text-center'>
            <h1>CONTACT ME</h1>
            <div className='star-icon d-flex justify-content-center m-4'>
            <svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </div>
         </div>
         <div className='form-box '>
         <form className='mb-5'>
         <div class="mb-3">
               <label for="name" class="form-label">Name</label>
               <input type="email" class="form-control" id="name" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">Email Address</label>
               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
               <label for="phonenumber" class="form-label">Phone Number</label>
               <input type="number" class="form-control" id="phonenumber"/>
            </div>
            <div class="mb-3">
               <label for="message" class="form-label">Message</label>
               <textarea type="text" class="form-control" id="message"/>
            </div>
            <button type="submit" class="btn btn-primary fs-5">Send</button>
         </form>
         </div>
      </div>
    </div>
  )
}
