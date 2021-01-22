import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Loadings from './index';
import { ElasticProps } from './Elastic/index'

export default {
  title: 'Loadings',
  component: Loadings,
  argTypes: {
    primaryColor: { control: 'color' },
  },
}

const Elastic: Story<ElasticProps> = (args) => <Loadings.Elastic {...args} />;



export const ElasticLoadings = Elastic.bind({});
ElasticLoadings.args = {
  primaryColor: '#000',
  width:200,
  height:200
};
