import React from 'react';
import { Common } from './Common';
import aboutImg from '../images/about.svg';


export const About = () => {
  return (
    <div>
      <Common
        heading="Welcome To About Page Of"
        subHeading="We Create Future Minds"
        btnText="Contact Us"
        imgSrc={aboutImg}
        navigateTo="/contact"
      />

    </div>

  )
}
