import React from 'react'
import LinkOfCrafts from './LinkOfCrafts'

import Star from '../images/Star.png'
import Work1 from '../images/Work1.png'

function ElctricWorker() {
  return (
    <>
      <section className='container'>
        <LinkOfCrafts />



        <div className='card mb-5'>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-4'>
              <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
              <h5> التقييم العام : من 10 زوار للكهربائي </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم : ابراهيم محمد عبد الحليم</h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : كهربائي </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : المنشية/المساكن الشعبية </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : 01002447017 </h5>
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
              <h5> التقييم العام : من 10 زوار للكهربائي </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم :  كريم احمد الصيري </h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : كهربائي </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : السوق /شارع ابو يوسف   </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : 010111671575  </h5>
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
              <h5> التقييم العام : من 10 زوار للكهربائي </h5>

            </div>

            <div className="col-lg-8">
              <img src={Work1} alt="" />
              <h5> الاسم : محمود ابو زيد </h5>
            </div>

          </div>

          <div className='row mt-4 pe-3'>

            <div className='col-lg-6'>
              <h5> الوظيفة : كهربائي </h5>
            </div>

            <div className='col-lg-6'>
              <h5> العنوان : المنشية/خلف المساكن الشعبية </h5>
            </div>

            <div className='col-lg-6'>
              <h5>رقم الهاتف : 01022561318  </h5>
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

export default ElctricWorker