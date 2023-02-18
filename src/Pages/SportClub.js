import React from 'react'
import ActivitiesOfClub from '../components/ActivitiesOfClub'

import '../Style.css'

function SportClub() {
  return (
    <>
       <section className='container'>

       <h2 className='SOC text-white text-center mt-5 mb-4 p-4 rounded w-25'> النادي الرياضي</h2>
      <div className='SOC1 rounded-5'>     </div>


<div className='ClubL  p-4'>
        <a className='fs-5' href='SportClub'> النادي </a>
        <a className='fs-5' href='#s'> عن النادي </a>
        <a className='fs-5' href='#i'> تقييمات الزائرين </a>
    </div>

    <h4 className='text-center mb-5'>الانشطة المتوفرة داخل النادي الرياضي</h4>



          <ActivitiesOfClub/>



       </section>
    </>
  )
}

export default SportClub