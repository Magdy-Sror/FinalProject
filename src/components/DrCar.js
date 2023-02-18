import React from 'react'
import dr from '../images/dr.png'
import Star from '../images/Star.png'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Disease from './Disease';


function DrCar() {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <Disease/>
    
    <section className='container'>

<div className='card mt-4 mb-4 p-4'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='row drRow'>
        <div className='col-md-4'>
          <img src={dr} alt="" className="img-fluid rounded-circle w-100" />
        </div>
        <div className='col-md-8'>
          <h4 className="text-primary">دكتور محمد جمال</h4>
          <h6>اخصائي الباطنه و الجهاز الهضمي</h6>
          <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
          <h6>التقييم العام من 5 زوار للدكتور</h6>

          <ul>
            <li className="mt-4">دكتور : باطنة  </li>
            <li className="mt-4">الكشف :  40 جنية</li>
            <li className="mt-4">الاماكن : مركز طب راس الخليج</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-6'>

      <Carousel responsive={responsive} className='mb-3'>

        <div class="card ms-5 mt-5  rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> اليوم</h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> من 1.00 م <br /> حتي 7.00 م </p>

          <div className='card-footer text-center bg-danger'>
            <h4 className='card-title text-center rounded w-100  text-white'> متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> غدا </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        
        <div class="card ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

      </Carousel>

      <h4 className="text-center">احرص علي القدوم في هذه المواعيد فقط</h4>
      
    </div>
  </div>

</div>






<div className='card mt-4 mb-4 p-4'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='row drRow'>
        <div className='col-md-4'>
          <img src={dr} alt="" className="img-fluid rounded-circle w-100" />
        </div>
        <div className='col-md-8'>
          <h4 className="text-primary">دكتور ابراهيم اسماعيل</h4>
          <h6>اخصائي الباطنه و الاطفال </h6>
          <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
          <h6>التقييم العام من 5 زوار للدكتور</h6>

          <ul>
            <li className="mt-4">دكتور : باطنة  </li>
            <li className="mt-4">الكشف :  50 جنية</li>
            <li className="mt-4">الاماكن : مركز طب راس الخليج</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-6'>

      <Carousel responsive={responsive} className='mb-3'>

        <div class="card ms-5 mt-5  rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> اليوم</h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> من 2.00 م <br /> حتي 6.00 م </p>

          <div className='card-footer text-center bg-danger'>
            <h4 className='card-title text-center rounded w-100  text-white'> متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> غدا </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        
        <div class="card ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

      </Carousel>

      <h4 className="text-center">احرص علي القدوم في هذه المواعيد فقط</h4>
      
    </div>
  </div>

</div>









<div className='card mt-4 mb-4 p-4'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='row drRow'>
        <div className='col-md-4'>
          <img src={dr} alt="" className="img-fluid rounded-circle w-100" />
        </div>
        <div className='col-md-8'>
          <h4 className="text-primary">دكتور حسن البيومي </h4>
          <h6>اخصائي الباطنه و الاطفال و الحميات </h6>
          <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
          <h6>التقييم العام من 5 زوار للدكتور</h6>

          <ul>
            <li className="mt-4">دكتور : باطنة و اطفال وحميات   </li>
            <li className="mt-4">الكشف :  50 جنية</li>
            <li className="mt-4">الاماكن : مركز طب راس الخليج</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-6'>

      <Carousel responsive={responsive} className='mb-3'>

        <div class="card ms-5 mt-5  rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> اليوم</h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> من 3.00 م <br /> حتي 9.00 م </p>

          <div className='card-footer text-center bg-danger'>
            <h4 className='card-title text-center rounded w-100  text-white'> متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> غدا </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        
        <div class="card ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

      </Carousel>

      <h4 className="text-center">احرص علي القدوم في هذه المواعيد فقط</h4>
      
    </div>
  </div>

</div>









<div className='card mt-4 mb-4 p-4'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='row drRow'>
        <div className='col-md-4'>
          <img src={dr} alt="" className="img-fluid rounded-circle w-100" />
        </div>
        <div className='col-md-8'>
          <h4 className="text-primary">دكتور عبدالله عجيز </h4>
          <h6>اخصائي الباطنه   </h6>
          <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
          <h6>التقييم العام من 5 زوار للدكتور</h6>

          <ul>
            <li className="mt-4">دكتور : باطنة  </li>
            <li className="mt-4">الكشف :  100 جنية</li>
            <li className="mt-4">الاماكن : مركز طب راس الخليج</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-6'>

      <Carousel responsive={responsive} className='mb-3'>

        <div class="card ms-5 mt-5  rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> اليوم</h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> من 4.00 م <br /> حتي 8.00 م </p>

          <div className='card-footer text-center bg-danger'>
            <h4 className='card-title text-center rounded w-100  text-white'> متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> غدا </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        
        <div class="card ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

      </Carousel>

      <h4 className="text-center">احرص علي القدوم في هذه المواعيد فقط</h4>
      
    </div>
  </div>

</div>







<div className='card mt-4 mb-4 p-4'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='row drRow'>
        <div className='col-md-4'>
          <img src={dr} alt="" className="img-fluid rounded-circle w-100" />
        </div>
        <div className='col-md-8'>
          <h4 className="text-primary">دكتور وليد حسن عوضين </h4>
          <h6>اخصائي الكلي و الباطنه   </h6>
          <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
          <h6>التقييم العام من 5 زوار للدكتور</h6>

          <ul>
            <li className="mt-4">دكتور : باطنة  </li>
            <li className="mt-4">الكشف :  50 جنية</li>
            <li className="mt-4">الاماكن : مركز طب راس الخليج</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-6'>

      <Carousel responsive={responsive} className='mb-3'>

        <div class="card ms-5 mt-5  rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> اليوم</h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> من 4.00 م <br /> حتي 9.00 م </p>

          <div className='card-footer text-center bg-danger'>
            <h4 className='card-title text-center rounded w-100  text-white'> متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> غدا </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        <div class="card  ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

        
        <div class="card ms-5 mt-5 rounded h-auto">

          <div class="card-head bg-primary">
            <h3 class="card-title text-center rounded w-100 text-white"> الخميس </h3>
          </div>

          <p class="card-text text-center mt-5 mb-5 fs-5"> لا يوجد مواعيد  <br /> حتي الان </p>

          <div className='card-footer text-center bg-secondary'>
            <h4 className='card-title text-center rounded w-100  text-white'> غير متاح </h4>
          </div>

        </div>

      </Carousel>

      <h4 className="text-center">احرص علي القدوم في هذه المواعيد فقط</h4>
      
    </div>
  </div>

</div>








</section>

    </>
  )
}

export default DrCar