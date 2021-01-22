import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Buttons from '../index';

export default {
  title: 'Buttons More',
  component: Buttons
}

const More: Story = (args) => <Buttons.More text={args.text} />

export const MoreButton = More.bind({});
MoreButton.args = {
  text:'测试'
};