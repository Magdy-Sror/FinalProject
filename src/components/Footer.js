import React from 'react'
import map1 from '../images/map1.PNG'
import '../Style.css'
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


function Footer() {
    return (
        <>
            <section className='F container'>

                <div className='row'>

                    <div className='col-lg-6'>

                        <img src={map1} alt="" />

                    </div>


                    <div className='FF col-lg-6'>

                        <div className="F1 mt-4">
                            <a className="link1 me-3" href="/">الصفحة الرئيسية</a>
                            <a className="link1 me-3" href="ServicesOfCountry">خدمات القرية</a>
                            <a className="link1 me-3" href="Evalutions"> تقييم القري </a>
                            <a className="link1 me-3" href='Place'>عن القرية</a>
                            <a className="link1 me-3" href='Footer'>المساعدة </a>
                        </div>


                        <div className='container'>
                            <div className='row'>

                                <div className='col-lg-6 pe-5 mt-5 mb-2'>
                                    <a className='text-white' href='#s'>المستشفيات الحكومية</a>
                                </div>


                                <div className='col-lg-6 pe-5 mt-5 mb-2'>
                                    <a className='text-white' href='#s'>المدارس الحكومية </a>
                                </div>


                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='Industry'>المصانع العامة  </a>
                                </div>


                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='ShopAndMool'>المولات والمحلات </a>
                                </div>


                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='AllPrivDoc'> الدكاترة الخصوصية</a>
                                </div>

                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='AllCrafts'> الصنايعية الخاصة</a>
                                </div>

                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='#s'>وسائل المواصلات </a>
                                </div>

                                <div className='col-lg-6 pe-5 mb-2'>
                                    <a className='text-white' href='Ambulances'> الاسعاف والطوارئ</a>
                                </div>



                            </div>
                        </div>


                        <div className='container mt-5'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <a className='fs-5' href="#s">Contact Us</a>

                                    <div className="F1 ">
                                        <a className="link" href="#s"> <BsFacebook /></a>
                                        <a className="link" href="#s"> <BsWhatsapp /></a>
                                        <a className="link" href="#s"> <BsLinkedin /></a>

                                    </div>





                                </div>


                                <div className='col-lg-6'>
                                    <h6 className='text-white pt-4'>Development Of Egyptian Villages</h6>
                                </div>






                            </div>









                        </div>







                    </div>










                </div>

            </section>




        </>
    )
}

export default Footer