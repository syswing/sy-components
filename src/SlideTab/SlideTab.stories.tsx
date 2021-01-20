import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SlideTab from './index';

export default {
  title: 'SlideTab',
  component: SlideTab
}

const Template: Story = (args) => <SlideTab tabArrs={['电容器123','阿斯蒂a','请问','阿道夫']} tabFontSize={20} tabMargin={10} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
