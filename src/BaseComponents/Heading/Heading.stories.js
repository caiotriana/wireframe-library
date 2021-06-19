import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'BaseComponents/Heading',
  component: Heading,
  argTypes: {
    size: {
      table: {
        type: { summary: 'string | "xLg" | "lg" | "md" | "sm"' },
        defaultValue: { summary: '"lg"' }
      },			
      control: {
        type: 'select',
        options: ['xLg','lg', 'md', 'sm']
      }
    }
  }
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size : 'sm'
};