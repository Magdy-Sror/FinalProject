import React from 'react'
import LinkOfCrafts from './LinkOfCrafts'
import Star from '../images/Star.png'
import Work1 from '../images/Work1.png'

function Plumber() {
  return (
    <>
      <section className='container'>
        <LinkOfCrafts />


        <div className='card mb-5'>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-4'>
              <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
              <h5> التقييم العام : من 10 زوار للسباك </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم : احمد محمود السقا   </h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : سباك </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : أرض الصيري    </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : 01063752136  </h5>
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
              <h5> التقييم العام : من 10 زوار للسباك </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم : محمود الجزار      </h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : سباك </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : أرض لطفي     </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : ٠١٢١٢١٥٣٥٢٥  </h5>
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
              <h5> التقييم العام : من 10 زوار للسباك </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم :  يحي زكريا </h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : سباك </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : المساكن الشعبية </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : 01007357049  </h5>
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

export default Plumber