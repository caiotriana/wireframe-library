import React from 'react';
import { ProfileStl, ProfileStlWrapper, ProfileStlName, ProfileStlRole } from './style'
import PropTypes from 'prop-types';

import { Avatar } from '../../BaseComponents/Avatar'


export function Profile({inverse, name, role}) {

  return (
    <ProfileStl>
      
      <Avatar 
        size={ role ? 'md' : 'sm'}
        inverse={ inverse }
      />
      
      <ProfileStlWrapper>
        <ProfileStlName inverse={inverse}>
          {name}
        </ProfileStlName>
        
        {role && 
          <ProfileStlRole inverse={inverse}>
            {role}
          </ProfileStlRole>
        }
      </ProfileStlWrapper>

    </ProfileStl>
  )
}

Profile.propTypes = {
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
};

Profile.defaultProps = {
  inverse: false,
  name : 'Lorem Ipsum',
};
