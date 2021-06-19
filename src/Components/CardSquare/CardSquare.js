import React from 'react';
import { CardSquareStl, CardSquareStlFigure } from './style'
import PropTypes from 'prop-types';

import { Link } from '../../BaseComponents/Link';
import { Subtitle } from '../../BaseComponents/Subtitle';


export function CardSquare({inverse, link, subtitle}) {

  return (
    <CardSquareStl>
      <CardSquareStlFigure inverse={inverse}/>

      <Subtitle inverse={inverse}>
        {subtitle}
      </Subtitle>

      <Link inverse={inverse} href={link.href}>
        {link.label}
      </Link>
    </CardSquareStl>
  )
}

CardSquare.propTypes = {
  inverse: PropTypes.bool,
  subtitle: PropTypes.string,
  subtitle: PropTypes.string,
};

CardSquare.defaultProps = {
  inverse: false,
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  link : { 
    label : 'See more',
    href : '#'
  }
};
