import React from 'react'
import craft1 from '../images/Mask Group 19.png'
import craft2 from '../images/Mask Group 26.png'
import craft3 from '../images/Mask Group 20.png'
import craft4 from '../images/Mask Group 21.png'
import craft5 from '../images/Mask Group 24.png'
import craft6 from '../images/Mask Group 25.png'
import craft7 from '../images/Mask Group 23.png'

function LinkOfCrafts() {
  return (
    <>
    <section className='container'>

    <div className='row mb-5'>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='ElctricWorker'>
    <h4 className='me-5 text-dark  py-5'>  كهربائي </h4>
    <img src={craft1} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PlumberWorker'>
    <h4 className='me-5 text-dark  py-5'>  سباك </h4>
    <img className='w-50' src={craft2} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='CarpenterWorker'>
    <h4 className='me-5 text-dark  py-5'>  نجار </h4>
    <img src={craft3} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='TilerWorker'>
    <h4 className='me-5 text-dark  py-5'>  مبلط </h4>
    <img src={craft4} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='BakerWorker'>
    <h4 className='me-5 text-dark  py-5'>  خباز </h4>
    <img src={craft5} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='DriverWorker'>
    <h4 className='me-5 text-dark  py-5'>  سواق </h4>
    <img className='w-50' src={craft6} alt="..." />
    </a>
</div>

<div className='col-lg-4 text-center'>
    <a className='text-decoration-none' href='PaintWorker'>
    <h4 className='me-5 text-dark  py-5'>  نقاش </h4>
    <img src={craft7} alt="..." />
    </a>
</div>

</div>

<hr className='mb-5'/>




    </section>
    
    
    
    
    </>
  )
}

export default LinkOfCrafts