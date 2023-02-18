import React from "react";
import MG1 from "../images/Mask Group 13.png";
import MG2 from "../images/Mask Group 11.png";
import MG3 from "../images/Mask Group 16.png";
import MG4 from "../images/Mask Group 12.png";
import MG5 from "../images/Mask Group 10.png";
import MG6 from "../images/Mask Group 17.png";
import MG7 from "../images/Mask Group 14.png";
import MG8 from "../images/Mask Group 15.png";
import MG9 from "../images/Mask Group 18.png";



import "../Style.css";

function SchoolsCom() {
  return (
    <>
    <section className='container'>

    <div className='row mb-5'>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='ElctricWorker'>
    <h4 className='me-5 text-dark  py-5'>  مدرسة رأس الخليج الاعدادية </h4>
    <img className='img-fluid' src={MG1} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PlumberWorker'>
    <h4 className='me-5 text-dark  py-5'>  مدرسة ممدوح ابو النجا </h4>
    <img className='img-fluid' src={MG2} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='CarpenterWorker'>
    <h4 className='me-5 text-dark  py-5'>  ممدوح ابو النجا اساسي </h4>
    <img className='img-fluid' src={MG3} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='TilerWorker'>
    <h4 className='me-5 text-dark  py-5'>  رأس الخليج أعدادي </h4>
    <img className='img-fluid' src={MG4} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='BakerWorker'>
    <h4 className='me-5 text-dark  py-5'>  رأس الخليج ثانوي </h4>
    <img className='img-fluid' src={MG5} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DriverWorker'>
    <h4 className='me-5 text-dark  py-5'>  معهد بنين اساسي </h4>
    <img className='img-fluid' src={MG6} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PaintWorker'>
    <h4 className='me-5 text-dark  py-5'>  معهد بنات اساسي </h4>
    <img className='img-fluid' src={MG7} alt="..." />
    </a>
</div>


<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PaintWorker'>
    <h4 className='me-5 text-dark  py-5'>  معهد ديني اعدادي </h4>
    <img className="img-fluid" src={MG8} alt="..." />
    </a>
</div>



<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PaintWorker'>
    <h4 className='me-5 text-dark  py-5'>  معهد ديني اعدادي </h4>
    <img className="img-fluid" src={MG9} alt="..." />
    </a>
</div>


</div>

<hr className='mb-5'/>




    </section>
    
    
    
    
    </>

  );
}

export default SchoolsCom;
