import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Table,{TableProps} from "./index";

export default {
  title: "Table",
  component: Table,
  argTypes:{
    order:{
      name: 'order',
      type: { name: 'string', required: false },
      defaultValue: 'desc',
      description: '升降序',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'desc' },
      },
      control: {
        type: 'select',
        options:[
          'desc',
          'asc'
        ]
      }
    },
    max:{
      description: '最大条目数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    LineHeight:{
      description: '每条行高',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '28' },
      },
    },
    cols:{
      description: '列',
      table: {
        type: { summary: 'TableCols[]' },
      },
    },
    scroll:{
      description: '滚动条样式',
      table: {
        type: { summary: 'style' },
      },
    },
    source:{
      description: '滚动条样式',
    },
    rank:{
      description: '根据字段排序',
      table: {
        type: { summary: 'string' },
      },
    }
  }
} as Meta;

const TableTemplate: Story<TableProps> = (args) => (
  <Table
    {...args}
  />
);

export const TableDefault = TableTemplate.bind({});
TableDefault.args = {
  source:[
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
  ],
  cols:[
    { dataIndex: "name", title: "名称", width: "80px" },
    { dataIndex: "count", title: "数量", width: "80px" },
    { dataIndex: "sale", title: "销售额", unit: "元", width: "80px" },
    {
      dataIndex: "edit",
      title: "编辑",
      width: "80px",
      render: (content: any) => {
        return <button>{content}</button>;
      },
    },
  ],
  scroll:`
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
  `,
  rank:"count",
  order:'desc',
  max:10,
  LineHeight:28
};
