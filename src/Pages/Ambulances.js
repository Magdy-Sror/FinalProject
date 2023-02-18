import React from 'react'
import Ambu1 from '../images/Mask Group 27.png'
import Star from '../images/Star.png'
function Ambulances() {
    return (
        <>
            <section className='container mb-5'>

                <h2 className='SOC text-white text-center mt-5 mb-4 p-4 rounded w-25'>  الاسعاف والطوارئ  </h2>
                <div className='SOC1 rounded-5'>     </div>



                <div className='ClubL  p-4'>
                    <a className='fs-5' href='#i'> المدرسين </a>
                    <a className='fs-5' href='#i'> عن الاسعاف  </a>
                    <a className='fs-5' href='#i'> تقييمات الزائرين </a>
                </div>


                <div className='row'>

                    <div className='col-lg-6 text-center'>
                        <a className='text-decoration-none' href='#s'>
                        <h4 className='me-5 text-dark  py-5'> اسعاف رأس الخليج </h4>
                        <img src={Ambu1} alt="" />
                        </a>
                    </div>

                    <div className='col-lg-6 text-center'>
                    <a className='text-decoration-none' href='#s'>
                        <h4 className='me-5 py-5 text-dark'>  تكريم الموتي  </h4>
                        <img src={Ambu1} alt="" />
                        </a>
                    </div>


                </div>
                <hr />

                <div className='row mb-5 mt-5'>

                    <div className='col-lg-6'>

                        <div className='card text-center rounded'>

                        <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
                            <h5>التقييم العام : من 10 زوار للاسعاف </h5>
                            <h5> العنوان : الطريق السريع رأس الخليج </h5>
                            <h5> التليفون : 0507974123 </h5>
                            <h5> الخدمة : 24 ساعة </h5>
                        </div>

                    </div>


                    <div className='col-lg-6'>

                        <div className='card text-center rounded'>
                        <h5><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></h5>
                            <h5>التقييم العام : من 10 زوار للاسعاف </h5>
                            <h5> العنوان : الطريق السريع رأس الخليج </h5>
                            <h5> التليفون : 0507974123 </h5>
                            <h5> الخدمة : 24 ساعة </h5>
                        </div>

                    </div>



                </div>
                <hr/>




            </section>

        </>
    )
}

export default Ambulances