import React from 'react'
import '../Style.css'
import Disease from '../components/Disease'


function Home() {
    return (
        <>
            <section className='container'>

            <h2 className='SOC text-white text-center mt-5 mb-4 p-4 fs-4 rounded w-25'> مستشفي رأس الخليج البلد   </h2>
      <div className='SOC1 rounded-5'>     </div>


      
<div className='ClubL  p-4'>
        <a className='fs-5' href='Hosp'> التخصصات </a>
        <a className='fs-5' href='#i'> عن المستشفي  </a>
        <a className='fs-5' href='#i'> تقييمات الزائرين </a>
        <a className='fs-5' href='#i'> التأمين الطبي </a>
    </div>


    <Disease/>
    
            </section>
            
            
    </>
    )
}

export default Home