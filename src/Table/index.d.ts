import React from 'react';
declare type Source = {
    [propName: string]: any;
};
declare type TableCols = {
    dataIndex: string;
    title: string;
    render?: Function;
    unit?: string;
};
export declare type Order = 'desc' | 'asc';
export interface YlTableProps {
    source: Source[];
    rank?: string;
    cols: TableCols[];
    order?: Order;
    max?: number;
    type?: 'noNO';
    LineHeight?: number;
    divider?: boolean;
    styles?: React.CSSProperties;
}
export declare const quickSort: (arr: any[], field: string, order: Order) => any[];
declare const YlTable: React.FC<YlTableProps>;
export default YlTable;
