import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Buttons from './index';

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    primaryColor: { control: 'color' },
    styles:{
      
    }
  },
}

const Bubbly: Story = (args) => <Buttons.Bubbly {...args} >{args.label}</Buttons.Bubbly>;
const More: Story = (args) => <Buttons.More text={'点击测试'} {...args}/>;


export const BubblyButton = Bubbly.bind({});
BubblyButton.args = {
  primaryColor:"#000",
  label:'点击测试'
};

export const MoreButton = More.bind({});
MoreButton.args = {
  label: 'Button',
};
