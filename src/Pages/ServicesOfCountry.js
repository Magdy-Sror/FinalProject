import React from 'react'
import {Link } from "react-router-dom"
import S2 from '../images/S2.jpg'
import '../Style.css'
import Hospitals from '../components/Hospitals'
import Schools from '../components/Schools'
import Industry from '../components/Industry'
import Shops from '../components/Shops'
import PrivDoc from '../components/PrivDoc'
import Crafts from '../components/Crafts'
import Club from '../components/Club'
import Ampulance from '../components/Ampulance'



function ServicesOfCountry() {
  return (
    <>



      <section className='container'>
        <div className='row'>
          <div className='col-lg-8 mb-1'>
            <input className="DocSearch-Input" id="docsearch-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" autofocus="true" placeholder=" بحث عن قرية او خدمة داخل القرية.. الخ" maxlength="64" type="search"></input>

            <div id="carouselExampleCaptions" class="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={S2} className="d-block mt-3 w-100" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <h5>قرية رأس الخليج</h5>
                    <p>هي احدي القري التابعة لمركز شربين محافظه الدقهلية في جمهورية مصر العربية....</p>
                    <button className='btn btn-light rounded-5'>قرأة المزيد</button>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>





          </div>

          <div className='col-lg-4 mt-3 '>

            <div class="dropdown">
              <Link class="btn btn-success dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </Link>

              <ul class="dropdown-menu">
                <div className='row'>

               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Hospital">المستشفيات  </Link></li>
               </div>
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/School">المدارس الحكومية</Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Industry">المصانع العامة</Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Shops">المولات و المحلات</Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/PrivDoc">الدكاترة الخصوصية</Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/work">الحرف والعمال </Link></li>
               </div>
                   
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/SPCL"> النادي الرياضي </Link></li>
               </div>

                   
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Ampulance"> الاسعاف والطوارئ   </Link></li>
               </div>

                </div>
                
              </ul>
            </div>

          </div>
        </div>
      </section>














      <Hospitals />
      <Schools />
      <Industry />
      <Shops />
      <PrivDoc />
      <Crafts />
      <Club />
      <Ampulance />














    </>
  )
}

export default ServicesOfCountry