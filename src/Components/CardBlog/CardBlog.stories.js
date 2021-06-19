import React from 'react';

import { CardBlog } from './CardBlog';

export default {
  title: 'Components/CardBlog',
  component: CardBlog,
};

const Template = (args) => <CardBlog {...args} />;

export const Default = Template.bind({});
Default.args = {};