import React from 'react';
import { CardBlogStl, CardBlogStlFigure, CardBlogStlTextGroup } from './style'
import PropTypes from 'prop-types';

import { Link } from '../../BaseComponents/Link';
import { Subtitle } from '../../BaseComponents/Subtitle';


export function CardBlog({subtitle, inverse, link}) {

  return (
    <CardBlogStl>
      <CardBlogStlFigure inverse={inverse}/>

      <CardBlogStlTextGroup inverse={inverse}>
        <Subtitle inverse={inverse} size={'sm'}>
          {subtitle}
        </Subtitle>

        <Link inverse={inverse} href={link.href}>
          {link.label}
        </Link>
      </CardBlogStlTextGroup>

    </CardBlogStl>
  )
}

CardBlog.propTypes = {
  inverse: PropTypes.bool,
  subtitle: PropTypes.string,
  link: PropTypes.object
};

CardBlog.defaultProps = {
  inverse: false,
  subtitle : 'Special Feature',
  link : { 
    label : 'See more',
    href : '#'
  }
};
