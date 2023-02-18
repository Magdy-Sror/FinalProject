import React from 'react'
import E1 from '../images/1.png'
import E2 from '../images/2.png'
import E3 from '../images/4.png'
import '../Style.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Evalutions() {

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

            <a className='More text-dark fs-4' href='ServicesOfCountry'>رؤية المزيد...</a>
            <section className='Evalution container mt-5 p-5'>


                <h3 className='text-center text-white mb-5'>الخدمات الاعلي تقييم داخل القرية الان</h3>

                <div className='All'>




                    <Carousel responsive={responsive}>
                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">مكتب بريد رأس الخليج</h5>
                               <img className='ms-5 w-50' src={E1} alt=".." />

                                <p class="card-text text-center">السبب : استخراج فيزا او الخدمات الاخري</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>

                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">مدرسة الخليج الثانوية </h5>
                               <img className='ms-5 w-50' src={E2} alt=".." />

                                <p class="card-text text-center">السبب : عدم وجود عجز بالمدرسين</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>
                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center"> طوارئ رأس الخليج</h5>
                               <img className='ms-5 w-50' src={E3} alt=".." />

                                <p class="card-text text-center">السبب : الحضور السريع</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>
                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">مكتب بريد رأس الخليج</h5>
                               <img className='ms-5 w-50' src={E1} alt=".." />

                                <p class="card-text text-center">السبب : استخراج فيزا او الخدمات الاخري</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>
                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">مكتب بريد رأس الخليج</h5>
                               <img className='ms-5 w-50' src={E1} alt=".." />

                                <p class="card-text text-center">السبب : استخراج فيزا او الخدمات الاخري</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>
                        <div class="card  m-5 rounded h-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">مكتب بريد رأس الخليج</h5>
                               <img className='ms-5 w-50' src={E1} alt=".." />

                                <p class="card-text text-center">السبب : استخراج فيزا او الخدمات الاخري</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>



                    </Carousel>







                </div>

            </section>


        </>
    )
}

export default Evalutions