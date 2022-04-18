import React from 'react'
import { Card } from './Card'
import { servicesData } from '../Data/servicesData'

export const Services = () => {
  return (
    <>
      <div className="text-center my-5">
        <h2>Our Services</h2>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {servicesData.map((service) => <Card key={service.id} service={service} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}