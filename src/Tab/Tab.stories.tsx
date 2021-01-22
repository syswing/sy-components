import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Tab,{ YlTabProps} from './index';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const TabTemplate: Story<YlTabProps> = (args) => <Tab {...args} />;

export const TabDefault = TabTemplate.bind({});
TabDefault.args = {
  styleNo:1,
  tabArrs:["测试1", "测试2"],
  callback:(e: any) => console.log(e),
  style:{  margin: "1rem 0" }
};
export const Template1 = TabTemplate.bind({});
Template1.args = {
  styleNo:2,
  tabArrs:["测试1", "测试2"],
  callback:(e: any) => console.log(e),
  style:{  margin: "1rem 0" }
};
export const Template2 = TabTemplate.bind({});
Template2.args = {
  styleNo:3,
  tabArrs:["测试1", "测试2"],
  callback:(e: any) => console.log(e),
  style:{  margin: "1rem 0" }
};
export const Template3 = TabTemplate.bind({});
Template3.args = {
  styleNo:4,
  tabArrs:["测试1", "测试2"],
  callback:(e: any) => console.log(e),
  style:{  margin: "1rem 0" }
};
