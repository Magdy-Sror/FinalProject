import React from 'react'
import {Link } from "react-router-dom"
import AnfWhngra from '../components/AnfWhngra'
import Gldya from '../components/Gldya'
import Graha from '../components/Graha'
import PatnaDoctor from '../components/PatnaDoctor'
import Asnan from '../components/Asnan'
import '../Style.css'
import SadrDoc from '../components/SadrDoc'
import Ezam from '../components/Ezam'
import Elasab from '../components/Elasab'

function AllPrivDoc() {
  return (
    <>
      <section className='container'>

        <h2 className='SOC text-white text-center mt-5 mb-4 p-4 rounded w-25'> العيادات الخصوصية  </h2>
        <div className='SOC1 rounded-5'>     </div>



        <div className='ClubL  p-4'>
          <a className='fs-5' href='#i'> الدكاترة </a>
          <a className='fs-5' href='#i'> عن الدكاترة  </a>
          <a className='fs-5' href='#i'> تقييمات الزائرين </a>
        </div>


      <div className='row mb-5'>

        <div className='col-md-3'>
        <div class="dropdown DocColor rounded">
              <Link class=" btn dropdown-toggle fs-5" to="#s" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                كل التخصصات 
              </Link>


        <ul class=" dropdown-menu">
                <div className='row'>

               <div className='col-lg-12 text-center  pe-5'>
                  <li><Link class="dropdown-item" to="/AllPrivDoc">كل التخصصات  </Link></li>
               </div>
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Patna"> باطنة </Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Gldya"> جلدية </Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Graha"> جراحه عامة  </Link></li>
               </div>
              
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Asnan"> أسنان</Link></li>
               </div>
              
               <div className='col-lg-6 '>
                  <li><Link class="dropdown-item" to="/AnfWhngra"> أنف وحنجرة  </Link></li>
               </div>
                   
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Ezam">عظام  </Link></li>
               </div>
                     
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Sadr">الصدر   </Link></li>
               </div>
                     
               <div className='col-lg-6'>
                  <li><Link class="dropdown-item" to="/Elasab">مخ وأعصاب   </Link></li>
               </div>

                  

                </div>
                
              </ul>
              </div>

              


        </div>

        <div className='col-md-3'>

          <h5 className='DocColor rounded text-center p-2'> مستشفي رأس الخليج البلد </h5>
        </div>
      </div>


    <PatnaDoctor/>
    <Gldya/>
    <Graha/>
    <AnfWhngra/>
    <Asnan/>
    <SadrDoc/>
    <Ezam/>
    <Elasab/>






      </section>





    </>
  )
}

export default AllPrivDoc