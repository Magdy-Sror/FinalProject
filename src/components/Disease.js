import React from "react";
import MG1 from "../images/Mask Group 1.png";
import MG2 from "../images/Mask Group 2.png";
import MG3 from "../images/Mask Group 3.png";
import MG4 from "../images/Mask Group 4.png";
import MG5 from "../images/Mask Group 8.png";
import MG6 from "../images/Mask Group 9.png";
    

import "../Style.css";

function Disease() {
  return (
    <>
    <section className='container'>

    <div className='row mb-5'>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض القلب  </h4>
    <img className="img-fluid" src={MG1} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض الكلي  </h4>
    <img className=' img-fluid' src={MG2} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض الجهاز الهضمي  </h4>
    <img className="img-fluid" src={MG3} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض الدم </h4>
    <img className="img-fluid" src={MG4} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  الأمراض الجلدية  </h4>
    <img className="img-fluid" src={MG5} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  الجراحه العامة  </h4>
    <img className='img-fluid' src={MG6} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض النسا والتوليد</h4>
    <img src={MG4} alt="..." />
    </a>
</div>


<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أنف وأذن وحنجرة </h4>
    <img src={MG5} alt="..." />
    </a>
</div>


<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DrCar'>
    <h4 className='me-5 text-dark  py-5'>  أمراض الرئة </h4>
    <img src={MG6} alt="..." />
    </a>
</div>

</div>

<hr className='mb-5'/>




    </section>
    
    
    
    
    </>
  );
}

export default Disease
