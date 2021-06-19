import React from 'react';

import { Hat } from './Hat';

export default {
  title: 'Example/Hat',
  component: Hat,
};

const Template = (args) => <Hat {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Author name',
};