import React from 'react'
import '../Style.css'
import S2 from '../images/2.png'
import S4 from '../images/4.png'
import S5 from '../images/5.png'
import S3 from '../images/Mask Group 17.png'

function Schools() {
  return (
    <>
    <section className='container'>
    <h3 className='SOC2 w-25 p-4 fs-4 text-center'>المدارس</h3>
      <hr className='mb-5'/>

      <div className='row'>


<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S2} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">مدرسة ابو النجا للتعليم الاساسي وتشمل  مرحلة الحضانة والابتدائية من الصف الاول للصف السادس</p>
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>



<div className='col-lg-3 col-md-4 mb-2'>
    <div class="card" >
        <img src={S2} class="card-img-top" alt="..."></img>
        <div class="card-body">

        <p class="card-text">مدرسة رأس الخليج الاساسية وتشمل دراسة مرحلة الحضانة والابتدائية من الصف الاول للصف السادس</p>
        <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>

<div className='col-lg-3 col-md-4 mb-2'>
                        <div class="card" >
                            <img src={S4} class="card-img-top" alt="..."></img>
                            <div class="card-body">

                            <p class="card-text">مدرسة رأس الخليج الرسمية وتشمل دراسة مرحلة الاعدادية فترتين صباحي ومسائي من الصف الاول للصف الثالث</p>
                            <hr/>
                                <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 mb-2'>
                        <div class="card" >
                            <img src={S5} class="card-img-top" alt="..."></img>
                            <div class="card-body">

                            <p class="card-text">مدرسة رأس الخليج الثانوية وتشمل دراسة مرحلة الثانوي من الصف الاول للصف الثالث كما انها هيا الوحيده ف القرية</p>
                            <hr/>
                                <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className='col-lg-3 col-md-4 mb-2'>
                        <div class="card" >
                            <img src={S3} class="card-img-top" alt="..."></img>
                            <div class="card-body">

                            <p class="card-text"> معهد ديني اساسي ويشمل دراسة المرحلة الابتدائية  من الصف الاول الابتدائي للصف السادس الابتدائي ويهتم بمرحلة التأسيس كما انه من افضل المعاهد علي مستوي القرية</p>
                            <hr/>
                                <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
                            </div>
                        </div>
                    </div>


</div>

<a className='More text-dark fs-4' href='School'>رؤية المزيد...</a>








    </section>
    
    
    
    
    
    
    </>
  )
}

export default Schools