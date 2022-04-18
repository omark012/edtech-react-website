import React from 'react'
import { Link } from 'react-router-dom'

export const Common = ({ btnText, heading, subHeading, imgSrc, navigateTo }) => {
  return (
    <section id="header" className="mt-5 d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">

              <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2>{heading} <b className="brand-name">BrandName</b> </h2>
                <h4 className="my-3">{subHeading}</h4>
                <Link to={navigateTo}><button className="btn get-btn mt-2" >{btnText}</button></Link>
              </div>

              <div className="col-md-6 order-1 order-lg-2 header-img ">
                <img className="img-fluid animated shadow" src={imgSrc} alt="Missing Image" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
