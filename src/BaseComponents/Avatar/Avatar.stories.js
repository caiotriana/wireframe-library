import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      description: 'Tamanho do Avatar',
      table: {
        type: { summary: 'string | "lg" | "md" | "sm"' },
        defaultValue: { summary: '"md"' }
      },			
      control: {
        type: 'select',
        options: ['lg', 'md', 'sm']
      }
    }
  }
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  inverse : false,
  size: 'md'
};