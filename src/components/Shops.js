import React from 'react'
import '../Style.css'
import S1 from '../images/supermarket.png'


function Shops() {
  return (
    <>
    <section id='Shops' className='container mb-5'>
    <h3 className='SOC2 w-25 p-4 fs-4 text-center'>المولات والمحلات</h3>
      <hr className='mb-5'/>

      <div className='row'>

<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">هايبر نور يوفر جميع المتطلبات المعيشيه والمجمدات والي اخرة </p> 
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">حسين المهراني يوفر جميع المتطلبات المعيشيه والمجمدات والي اخرة </p> 
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">سوق رأس الخليج  يوفر جميع المتطلبات المعيشيه والمجمدات والي اخرة </p> 
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">ماركت قطر الندي  يوفر بعض المتطلبات المعيشيه وليس كلها  </p> 
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>



</div>

<a className='More text-dark fs-4' href='ShopAndMool'>رؤية المزيد...</a>








    </section>
    
    
    
    
    
    
    </>
  )
}

export default Shops