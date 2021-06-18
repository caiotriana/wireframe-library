import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
  argTypes: {
    size: {
      description: 'Tamanho do heading',
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
  size : 'sm',
  children: 'Heading',
};