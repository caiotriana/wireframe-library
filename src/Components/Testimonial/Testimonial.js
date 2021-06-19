import React from 'react';
import { TestimonialStl } from './style'
import PropTypes from 'prop-types';

import { Subtitle } from '../../BaseComponents/Subtitle'
import { Profile } from '../Profile'


export function Testimonial({inverse, subtitle, profile}) {

  return (
    <TestimonialStl>
      <Subtitle inverse={inverse} size={'sm'}>
        {subtitle}
      </Subtitle>

      <Profile 
        name={profile.name} 
        role={profile.role}
        inverse={inverse} />
    

    </TestimonialStl>
  )
}

Testimonial.propTypes = {
  inverse: PropTypes.bool,
  subtitle: PropTypes.string,
  profile: PropTypes.object
};

Testimonial.defaultProps = {
  inverse: false,
  subtitle : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”',
  profile : { 
    name : 'Maria Lopez',
    role : 'VP of Design at Meshery'
  }
};
