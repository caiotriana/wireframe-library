import React from 'react';

import { CardSquare } from './CardSquare';

export default {
  title: 'Components/CardSquare',
  component: CardSquare,
};

const Template = (args) => <CardSquare {...args} />;

export const Default = Template.bind({});
Default.args = {
};