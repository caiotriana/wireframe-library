import React from 'react';

import { Button } from './Heading';

export default {
  title: 'Example/Heading',
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size : 'sm',
  children: 'Heading',
};