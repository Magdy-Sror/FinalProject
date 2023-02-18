import React from 'react'
import N1 from '../images/N1.png'
import N2 from '../images/N2.png'
import N3 from '../images/N3.png'
import N4 from '../images/N4.png'
import N5 from '../images/N5.png'
import N6 from '../images/N6.png'
import '../Style.css'

function News() {
  return (
    <>
      <section className='News container mb-5 mt-4'>
        <h4>المعلومات الجديدة التي تمت اضافتها لقرية رأس الخليج</h4>
        <hr className='mb-5'/>
        <a href='#s'><img src={N1} alt="" />مستشفي البلد</a>
        <a href='#s'><img src={N2} alt="" />مدرسة ابو النجا</a>
        <a href='#s'><img src={N3} alt="" />مواصلات النقل</a>
        <a href='#s'><img src={N4} alt="" />مصنع طوب احمر</a>
        <a href='#s'><img src={N5} alt="" />محل ملابس بيلا</a>
        <a href='Ambulances'><img src={N6} alt="" />اسعافات سريعة</a>
      </section>

    </>
  )
}

export default News