import React from 'react';

import { Subtitle } from './Subtitle';

export default {
  title: 'Example/Subtitle',
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Subtitle lorem impsum dolor sit amet',
};