import React from 'react';

import { Testimonial } from './Testimonial';

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
};

const Template = (args) => <Testimonial {...args} />;

export const name = Template.bind({});
name.args = {};

export const role = Template.bind({});
role.args = {};