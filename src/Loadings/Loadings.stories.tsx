import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Loadings from './index';

export default {
  title: 'Loadings',
  component: Loadings,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Elastic: Story = (args) => <Loadings.Elastic {...args} />;



export const ElasticLoadings = Elastic.bind({});
ElasticLoadings.args = {
  primary: true,
  label: 'Button',
};
