import React from 'react'
import S10 from '../images/Mask Group 29.png'
import S11 from '../images/Mask Group 30.png'
import S12 from '../images/Mask Group 31.png'
import S13 from '../images/Mask Group 32.png'
import S14 from '../images/Mask Group 33.png'
import S15 from '../images/Mask Group 34.png'


function ActivitiesOfClub() {
  return (
    <>
    <section className='container mb-5'>
        <div className='row'>

            <div className='col-lg-4'>
                <h4 className='text-center py-5'>تنس الطاولة</h4>
                <img src={S10} alt="" />
            </div>

            <div className='col-lg-4'>
                <h4 className='text-center py-5'>بلياردو </h4>
                <img src={S11} alt="" />
            </div>

            <div className='col-lg-4'>
                <h4 className='text-center py-5'>كرة القدم </h4>
                <img src={S12} alt="" />
            </div>

            <div className='col-lg-4'>
                <h4 className='text-center py-5'> رفع اثقال </h4>
                <img src={S13} alt="" />
            </div>
            <div className='col-lg-4'>
                <h4 className='text-center py-5'> العاب الكترونية </h4>
                <img src={S14} alt="" />
            </div>
            <div className='col-lg-4'>
                <h4 className='text-center py-5'> شطرنج  </h4>
                <img src={S15} alt="" />
            </div>




        </div>
    </section>

    <hr className='mb-5'/>
    
    
    
    
    </>
  )
}

export default ActivitiesOfClub