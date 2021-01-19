// Button.stories.tsx

import React from 'react';
import Bubbly  from './index';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Buttons',
  component: Bubbly,
};

const Template: Story = (args) => (
  <Bubbly {...args} >点击测试</Bubbly>
);

export const BubblyButtons = Template.bind({});
BubblyButtons.args = {
  /* the args you need here will depend on your component */
};
