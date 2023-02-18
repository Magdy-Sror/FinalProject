import React from 'react'
import LinkOfCrafts from './LinkOfCrafts'
import Star from '../images/Star.png'
import Work1 from '../images/Work1.png' 

function BakerWorker() {
  return (
    <>

    <section className='container'>
        <LinkOfCrafts/>

        
        <div className='card mb-5'>

<div className='row mt-4 pe-3'>

  <div className='col-lg-4'>
    <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
    <h5> التقييم العام : من 10 زوار للخباز </h5>

  </div>

  <div className="col-lg-8">
    <img src={Work1} alt="" />
    <h5> الاسم : ابراهيم الجزار </h5>
  </div>

</div>

<div className='row mt-4 pe-3'>

  <div className='col-lg-6'>
    <h5> الوظيفة : خباز </h5>
  </div>

  <div className='col-lg-6'>
    <h5> العنوان :  وسط البلد/ امام مكتبة بدير  </h5>
  </div>

  <div className='col-lg-6'>
    <h5>رقم الهاتف : لا يوجد  </h5>
  </div>

  <div className='col-lg-6'>
    <h5> مواعيد العمل : من 12 ص الي 10 م </h5>
  </div>

</div>

</div>


<div className='card mb-5'>

<div className='row mt-4 pe-3'>

  <div className='col-lg-4'>
    <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
    <h5> التقييم العام : من 10 زوار للخباز </h5>

  </div>

  <div className="col-lg-8">
    <img src={Work1} alt="" />
    <h5> الاسم : عصام الجزار  </h5>
  </div>

</div>

<div className='row mt-4 pe-3'>

  <div className='col-lg-6'>
    <h5> الوظيفة : خباز </h5>
  </div>

  <div className='col-lg-6'>
    <h5> العنوان :  وسط البلد/ بجوار اسامة الجزار  </h5>
  </div>

  <div className='col-lg-6'>
    <h5>رقم الهاتف :  لا يوجد   </h5>
  </div>

  <div className='col-lg-6'>
    <h5> مواعيد العمل : من 12 ص الي 10 م </h5>
  </div>

</div>

</div>







    </section>
    

    
    
    
    </>
  )
}

export default BakerWorker