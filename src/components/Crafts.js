import React from 'react'
import '../Style.css'
import S1 from '../images/Mask Group 20.png'
import S2 from '../images/Mask Group 21.png'
import S3 from '../images/Mask Group 24.png'
import S4 from '../images/Mask Group 23.png'
import S5 from '../images/Mask Group 19.png'


function Crafts() {
  return (
    <>
    <section className='container mb-5'>
    <h3 className='SOC2 w-25 p-4 fs-4 text-center'>الحرف والعمال</h3>
      <hr className='mb-5'/>

      <div className='row'>

<div className='col-lg-3  col-md-4 mb-2'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يمكنك من داخل قسم النجار اختيار النجار اللذي تحتاجه من خلال التواصل معه علي الهاتف الخاص به  </p>
            <hr/>
            <a href="CarpenterWorker" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S2} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يمكنك من داخل قسم المبلط اختيار المبلط اللذي تحتاجه من خلال التواصل معه علي الهاتف الخاص به  </p>
            <hr/>
            <a href="TilerWorker" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S3} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يمكنك من داخل قسم الخباز اختيار الخباز اللذي تحتاجه من خلال التواصل معه علي الهاتف الخاص به  </p>
            <hr/>
            <a href="BakerWorker" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S4} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يمكنك من داخل قسم النقاش اختيار النقاش اللذي تحتاجه من خلال التواصل معه علي الهاتف الخاص به  </p>
            <hr/>
            <a href="PaintWorker" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S5} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text"> يمكنك من داخل قسم الكهربائي اختيار الكهربائي اللذي تحتاجه من خلال التواصل معه علي الهاتف الخاص به  </p>
            <hr/>
            <a href="ElctricWorker" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>



</div>

<a className='More text-dark fs-4' href='#s'>رؤية المزيد...</a>








    </section>
    
    
    
    
    
    
    </>
  )
}

export default Crafts