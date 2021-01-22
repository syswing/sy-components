import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SlideTab,{SlideTabProps} from './index';

export default {
  title: 'SlideTab',
  component: SlideTab
}

const Template: Story<SlideTabProps> = (args) => <SlideTab {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tabArrs:['这是','我的','组件库'],
  tabFontSize:20,
  tabMargin:10
};
