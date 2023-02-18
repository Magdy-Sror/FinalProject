import React from "react";
import MG1 from "../images/Mask Group 1.png";
import MG2 from "../images/Mask Group 2.png";
import MG3 from "../images/Mask Group 3.png";
import MG4 from "../images/photo_2023-02-08_21-41-24.jpg";
import MG5 from "../images/photo_2023-02-08_21-49-00.jpg";
import "../Style.css";

function Disease() {
  return (
    <>
            <Disease />
    <div className="container mb-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            التخصصات
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            عن المستشفي
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            تقييمات الزائرين
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
          >
            التأمين الطبي (لا يتوفر تأمين)
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div className="row mt-5">
            <div className="col-md-4 text-center">
            <a href="Heart">
                <h5> امراض القلب </h5>
              <img alt= "" src={MG1} className="img-fluid" />
            </a>
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الجهاز الهضمي </h5>
              <img alt= "" src={MG3} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض النسا و التوليد</h5>
              <img alt= "" src={MG4} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الرئه </h5>
              <img alt= "" src={MG5} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="row mt-5">
            <div className="col-md-4 text-center">
                <h5> امراض القلب </h5>
              <img alt= "" src={MG1} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الجهاز الهضمي </h5>
              <img alt= "" src={MG3} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض النسا و التوليد</h5>
              <img alt= "" src={MG4} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الرئه </h5>
              <img alt= "" src={MG5} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div className="row mt-5">
            <div className="col-md-4 text-center">
                <h5> امراض القلب </h5>
              <img alt= "" src={MG1} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الجهاز الهضمي </h5>
              <img alt= "" src={MG3} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض النسا و التوليد</h5>
              <img alt= "" src={MG4} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الرئه </h5>
              <img alt= "" src={MG5} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          <div className="row mt-5">
            <div className="col-md-4 text-center">
                <h5> امراض القلب </h5>
              <img alt= "" src={MG1} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الجهاز الهضمي </h5>
              <img alt= "" src={MG3} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض النسا و التوليد</h5>
              <img alt= "" src={MG4} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الرئه </h5>
              <img alt= "" src={MG5} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h5> امراض الكلي </h5>
              <img alt= "" src={MG2} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default Disease;
