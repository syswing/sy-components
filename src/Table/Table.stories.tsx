import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table from './index';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const TableTemplate: Story = (args) => <Table
source={[
  { name: "苹果", count: 123, sale: 555 },
  { name: "香蕉", count: 234, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "菠萝", count: 123, sale: 666 },
  { name: "梨", count: 445, sale: 666, edit: "阿斯蒂芬" },
]}
cols={[
  { dataIndex: "name", title: "名称",width:'80px' },
  { dataIndex: "count", title: "数量",width:'80px' },
  { dataIndex: "sale", title: "销售额", unit: "元",width:'80px' },
  {
    dataIndex: "edit",
    title: "编辑",
    width:'80px',
    render: (content: any) => {
      return <button>{content}</button>;
    },
  },
]}
rank={"count"}
scroll={`
  &::-webkit-scrollbar {
    width : 15px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #0088FF;
  }
  &::-webkit-scrollbar-track {
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`}
{...args}
/>;
 


export const TableDefault = TableTemplate.bind({});
TableDefault.args = {
  primary: true,
  label: 'Button',
};
