import React from 'react';
declare type Source = {
    [propName: string]: any;
};
interface TableCols {
    dataIndex: string;
    title?: string;
    render?: Function;
    unit?: string;
    width?: string | number;
}
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
    scroll?: string;
}
export declare const quickSort: (arr: any[], field: string, order: Order) => any[];
declare const YlTable: React.FC<YlTableProps>;
export default YlTable;
