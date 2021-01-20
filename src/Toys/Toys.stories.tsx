import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Toys from './index';

export default {
  title: 'Toys',
  component: Toys,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const ToysTemplate: Story = (args) => <Toys.AmongUs.Connect />
 


export const ToysAmongUs = ToysTemplate.bind({});
ToysAmongUs.args = {
  primary: true,
  label: 'Toys',
};
