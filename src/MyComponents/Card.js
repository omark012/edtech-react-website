import React from 'react'

export const Card = ({ service }) => {
    return (
        <div className="col-md-4 col-10 mx-auto g-5">

            <div className="card">
                <img src={service.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Get Now</a>
                </div>
            </div>
        </div>

    )
}
