import React from 'react'
import { Common } from './Common'
import homeImg from '../images/main.svg'


export const Home = () => {
  return (
    <>
      <Common
        heading=" Shop thousands of high-quality on-demand online courses on"
        subHeading="We Create Future Minds"
        btnText="Get Started"
        imgSrc={homeImg}
        navigateTo="/services"
      />
    </>

  )
}
