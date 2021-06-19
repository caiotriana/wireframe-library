import React from 'react';

import { Profile } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const name = Template.bind({});
name.args = {
  inverse : false,
  name : 'Jhon Doe'
};

export const role = Template.bind({});
role.args = {
  inverse : false,
  name : 'Jhon Doe',
  role : 'Front End Developer'
};