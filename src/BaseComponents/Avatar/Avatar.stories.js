import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'BaseComponents/Avatar',
  component: Avatar,
  argTypes: {
    size: {
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
  size: 'md'
};