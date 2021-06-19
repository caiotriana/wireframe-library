import React from 'react';

import { Subtitle } from './Subtitle';

export default {
  title: 'BaseComponents/Subtitle',
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {};