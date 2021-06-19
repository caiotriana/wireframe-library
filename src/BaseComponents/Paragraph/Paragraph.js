import React from 'react';
import { ParagraphStl } from './style'
import PropTypes from 'prop-types';


export function Paragraph({children, inverse}) {

  return (
    <ParagraphStl 
      inverse={inverse}
    >
      {children}
    </ParagraphStl>
  )
}

Paragraph.propTypes = {
  inverse: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  inverse: false,
  children: 'Paragraph lorem impsum dolor sit amet',
};
