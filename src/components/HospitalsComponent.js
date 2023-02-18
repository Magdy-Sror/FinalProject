import React from 'react'
import '../Style.css'
import S1 from '../images/1.png'
import S2 from '../images/2.png'
import S4 from '../images/4.png'
import S5 from '../images/5.png'

function HospitalsComponent() {
  return (
    <>
     <section className='container mb-5'>
       
       <h3 className='SOC text-white text-center mb-4 p-2 rounded w-25'>خدمات القري</h3>
      <div className='SOC1 rounded-5'>     </div>

      <h3 className='SOC2 w-25 p-4 fs-4 text-center'>المستشفيات</h3>
      <hr className='mb-5'/>

      <div className='row'>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S1} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">يوفر مكتب خليج رأس البلد خدمات متنوعة ومتميزة لكافة مواطنية وتشمل الخدمات المالية مثل استخراج الفيزا </p>
            <hr/>
            <a href="#HospitalsComponent" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S2} class="card-img-top" alt="..."></img>
        <div class="card-body">

            <p class="card-text">مدرسة ابو النجا للتعليم الاساسي وتشمل  مرحلة الحضانة والابتدائية من الصف الاول للصف السادس</p>
            <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S4} class="card-img-top" alt="..."></img>
        <div class="card-body">

        <p class="card-text">مدرسة ممدوح ابو النجا  وتشمل  مرحلتين الابتدائية من الصف الاول للسادس ومرحلة اعدادية من الصف الاول للثالث</p>
        <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>

<div className='col-lg-3'>
    <div class="card" >
        <img src={S5} class="card-img-top" alt="..."></img>
        <div class="card-body">

        <p class="card-text">مدرسة رأس الخليج الاساسية وتشمل دراسة مرحلة الحضانة والابتدائية من الصف الاول للصف السادس</p>
        <hr/>
            <a href="#s" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
        </div>
    </div>
</div>


</div>


<a className='More text-dark fs-4' href='#s'>رؤية المزيد...</a>



      
      
      
      
      
      </section>    
    
    
    
    
    </>
  )
}

export default HospitalsComponent