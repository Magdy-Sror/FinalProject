import React from 'react'
import S2 from '../images/S2.jpg'
import S3 from '../images/slide1.png'
import '../Style.css'
import chatbot from '../images/chatbot.png'
import {BsChatDots} from 'react-icons/bs'
import {BsFillMicFill} from 'react-icons/bs'

function Slider() {
    return (
        <>
                 <section className=' container '>
                <div className='row'>
                    <div className='col-lg-8 mb-1'>
                        <input className="DocSearch-Input" id="docsearch-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" autofocus="true" placeholder=" بحث عن قرية او خدمة داخل القرية.. الخ" maxlength="64" type="search"></input>

                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img src={S2} className="d-block mt-3 w-100" alt="..." />

                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>قرية رأس الخليج</h5>
                                        <p>هي احدي القري التابعة لمركز شربين محافظه الدقهلية في جمهورية مصر العربية....</p>
                                        <button className='btn btn-light rounded-5'>قرأة المزيد</button>
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                  <img src={S3} className="d-block mt-3 w-100" alt="..." />

                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>قرية رأس الخليج</h5>
                                        <p>هي احدي القري التابعة لمركز شربين محافظه الدقهلية في جمهورية مصر العربية....</p>
                                        <button className='btn btn-light rounded-5'>قرأة المزيد</button>
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                  <img src={S3} className="d-block mt-3 w-100" alt="..." />

                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>قرية رأس الخليج</h5>
                                        <p>هي احدي القري التابعة لمركز شربين محافظه الدقهلية في جمهورية مصر العربية....</p>
                                        <button className='btn btn-light rounded-5'>قرأة المزيد</button>
                                    </div>
                                </div>
                                


                            </div>

                            
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                            


                    </div>

                    <div className='BotChat col-lg-4 mt-3 text-success '>
                        <h5 className='Nchat mb-4'><BsChatDots className="botIcon"/>    الشات بوت </h5>
                        <p className='Dchat'>التواصل مع الدعم الفني <br/>الدعم المباشر  <img src={chatbot} alt="" /></p>
                        
                        <button className='CH btn btn-success px-5'>محادثه</button>
                        <a  href='#S'><BsFillMicFill/>  متابعه المحادثة</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider