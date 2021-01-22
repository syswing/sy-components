import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Buttons from '../index';

export default {
  title: 'Buttons Bubbly',
  component: Buttons,
  argTypes: {
    primaryColor: { control: 'color' },
    styles:{
      width:'100px'
    }
  },
}

const Bubbly: Story = (args) => <Buttons.Bubbly {...args} >{args.label}</Buttons.Bubbly>;

export const BubblyButton = Bubbly.bind({});
BubblyButton.args = {
  primaryColor:"#000",
  label:'点击测试'
};