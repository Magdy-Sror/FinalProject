import React from 'react'
import '../Style.css'
import S1 from '../images/1.png'


function Industry() {
  return (
    <>
    <section className='container mb-5 '>
    <h3 className='SOC2 w-25 p-4 fs-4 text-center'>المصانع</h3>
      <hr className='mb-5'/>

      <div className='row'>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يوفر المصنع جميع انواع الطوب بجودة مرتفعة وامداد الطوب المصنع عمر زائد وهو المصنع الوحيد المتاح داخل القرية </p>
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-6 rounded me-5"> لا يتوفر معلومات اضافية الان </a>
        </div>
    </div>
</div>



</div>









    </section>
    
    
    
    
    
    
    </>
  )
}

export default Industry