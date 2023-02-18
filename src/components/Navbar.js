import React from 'react'
import {Link } from "react-router-dom"
import logo from '../images/logo.png'
import '../Style.css'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'




function Navbar() {
  return (

    <>
      <nav className="navbar container navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">تنمية القري المصرية<img src={logo} alt=''></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">الصفحة الرئيسية</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="ServicesOfCountry" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  خدمات القري
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='ServicesOfCountry'>جميع الخدمات</Link></li>
                  <li><Link className="dropdown-item" to="SportClub">النادي الرياضي</Link></li>
                  <li><Link className="dropdown-item" to="ShopAndMool">المولات والمحلات</Link></li>
                  <li><Link className="dropdown-item" to="Ambulances"> الاسعاف والطوارئ </Link></li>
                  <li><Link className="dropdown-item" to="AllCrafts">  الحرف و العمال </Link></li>
                  <li><Link className="dropdown-item" to="AllPrivDoc">   العيادات الخصوصية  </Link></li>
                  <li><Link className="dropdown-item" to="Hosp">   مستشفي رأس الخليج البلد  </Link></li>
                  <li><Link className="dropdown-item" to="SchoolS">  المدارس  </Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to='/Place'>عن القري</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to='/Evalutions'>تقييمات القري</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#s" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  القري المتواجدة
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">قرية رأس الخليج </Link></li>
                  <li><Link className="dropdown-item" to="#s">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#s">Something else here</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to='/s'>التواصل معنا للمساعدة</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              
                
              <BiCurrentLocation className='icoN'/>  <input className="form-control" type="search" placeholder="ادخل اسم القرية" aria-label="Search" />
                <a className='text-white' href='/'><MdLocationOn className='fs-3 ms-1 text-white'/>تحديد موقع القرية</a>
              
            </form>
          </div>
        </div>
      
    </nav>
</>
  )
}

export default Navbar