import React from 'react';
import More  from './index';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'More',
  component: More,
};

const Template: Story = (args) => (
  <More text={'查看更多'} {...args} />
);

export const BubblyButtons = Template.bind({});
BubblyButtons.args = {
  /* the args you need here will depend on your component */
};
