import React from 'react'
import '../Style.css'


import SchoolsComp from '../components/SchoolComp'


function School() {
    return (
        <div className='Containerschools-page'>
             <div className='container'>
             <h2 className='SOC text-white text-center mt-5 mb-4 p-4 rounded w-25'> المدارس  </h2>
        <div className='SOC1 rounded-5'>     </div>

        <div className='ClubL  p-4'>
          <a className='fs-5' href='#i'> المدرسين </a>
          <a className='fs-5' href='#i'> عن المدرسة  </a>
          <a className='fs-5' href='#i'> تقييمات الزائرين </a>
        </div>

            </div>
            <SchoolsComp />
    </div>
    )
}

export default School