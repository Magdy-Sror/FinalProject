import React from 'react'
import '../Style.css'
import S1 from '../images/Mask Group 27.png'

function Hospitals() {
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

                            <p class="card-text"> مستشفي رأس الخليج وتقع علي مساحة كبيرة من البلدة كما أنها تضم العديد من الخدمات التي يأتي لها الجميع من القري المجاورة </p>
                            <hr/>
                                <a href="Hospitals" class="btn btn-light text-success fs-5 rounded me-5">مزيد من المعلومات</a>
                            </div>
                        </div>
                    </div>






</div>


<a className='More text-dark fs-4' href='#s'>رؤية المزيد...</a>



      
      
      
      
      
      </section>    
    
    
    
    
    </>
  )
}

export default Hospitals