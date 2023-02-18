import React from 'react'
import S1 from '../images/N1.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Workers() {

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
            <div className="container mt-5">
                <h4>الصنايعية التي تمت اضافتها حديثا داخل القرية</h4>
                <hr className='mb-5' />


                <div className='row'>

                    <Carousel responsive={responsive}>
                        <div className='row'>

                            <div class="card rounded m-4 h-uto">
                                <div class="row ">
                                    <div class="col-md-4 ">
                                        <img src={S1} class="img-fluid rounded-start" alt="..."></img>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title fs-6">الاسم: إبراهيم محمد عبد الحليم</h6>
                                            <p class="card-text">المهنة: كهربائي</p>
                                            <p class="card-text fs-6 w-75">رقم الموبايل: 01002447017</p>

                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم: احمد محمود السقا </h6>
                <p class="card-text">المهنة: سباك</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 01063752136</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>


<div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم:  محمود صالح كراكيشة </h6>
                <p class="card-text">المهنة: نجار</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 01023362314</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>


<div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم: خالد جادالله</h6>
                <p class="card-text">المهنة: مبلط</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 0101453848</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>


<div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم:  محمد عسكر</h6>
                <p class="card-text">المهنة: نقاش</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 01095797572</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>


<div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم:  معاذ سعد القللي</h6>
                <p class="card-text">المهنة: سواق</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 01095859746</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>


<div className='row'>

<div class="card rounded m-4 h-uto">
    <div class="row ">
        <div class="col-md-4 ">
            <img src={S1} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h6 class="card-title fs-6">الاسم: احمد محمود محمود</h6>
                <p class="card-text">المهنة: كهربائي</p>
                <p class="card-text fs-6 w-75">رقم الموبايل: 0108175987</p>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div>





                    </Carousel>










                </div>


            </div>




        </>
    )
}

export default Workers