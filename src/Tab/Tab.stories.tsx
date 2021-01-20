import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Tab from './index';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const TabTemplate: Story = (args) => <Tab {...args} styleNo={1} tabArrs={["测试1", "测试2"]} callback={(e: any) => console.log(e)} style={{  margin: "1rem 0" }}/>;
 


export const TabDefault = TabTemplate.bind({});
TabDefault.args = {
  primary: true,
  label: 'Button',
};
