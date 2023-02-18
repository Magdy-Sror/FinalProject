import React from 'react'
import '../Style.css'
import S1 from '../images/img11.png'



function Ampulance() {
  return (
    <>
    <section className='container mb-5'>
    <h3 className='SOC2 w-25 p-4 fs-4 text-center'>الاسعاف والطوارئ</h3>
      <hr className='mb-5'/>

      <div className='row'>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">  الاسعاف والطوارئ وتضم العديد من عربات الاسعاف وتعمل علي مدار ال24 ساعه كما يتوفر لهم بعض الخدمات قبل نقل المريض </p>
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>



</div>








    </section>
    
    
    
    
    
    
    </>
  )
}

export default Ampulance