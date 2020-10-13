import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import styles from './index.less';
import './index.less';

type Source = {
  [propName: string]: any;
};

type TableCols = {
  dataIndex: string;
  title: string;
  render?: Function;
  unit?: string;
};

export type Order = 'desc' | 'asc';

export interface YlTableProps {
  source: Source[];
  rank?: string;
  cols: TableCols[];
  order?: Order;
  max?: number;
  type?: 'noNO';
  LineHeight?: number;
  divider?: boolean;
}

interface ScrollProps {
  max: number;
  children: React.ReactElement;
  LineHeight?: number;
}

// ? 对字段进行快速排序
// ? array.sort 排序算法 判断数组长度 选择 归并 插入 双轴快速排序
export const quickSort = (arr: any[], field: string, order: Order) => {
  return order === 'desc'
    ? arr?.sort((a, b) => b[field] - a[field])
    : arr?.sort((a, b) => a[field] - b[field]);
};

const Scroll = (props: ScrollProps) => {
  const { max, LineHeight } = props;

  const style = {
    height: `${(max + 1) * ((LineHeight ?? 28) + 3)}px`,
  };
  return (
    <div className={styles.scroll}>
      <div className={styles.scrollInner} style={style}>
        {props.children}
      </div>
    </div>
  );
};

const YlTable: React.FC<YlTableProps> = (props: YlTableProps) => {
  const { source, cols, rank, order, max, type, divider } = props;
  const mCols = _.cloneDeep(cols);
  const LineHeight = props.LineHeight ?? 28;

  if (rank) {
    mCols.unshift({
      dataIndex: 'index',
      title: '排名',
    });
    // ? 对字段进行排序

    quickSort(source, rank, order ?? 'desc');

    source?.map((data, index) => {
      return {
        ...data,
        index,
      };
    });
  }

  // !rank ? styles.ylTable : styles.ylTableRank

  return (
    <Scroll max={max ?? 5} LineHeight={LineHeight}>
      <table
        className={classNames(
          !rank ? styles.ylTable : styles[`ylTableRank${type ?? ''}`],
        )}
        style={{ lineHeight: `${LineHeight}px` }}
      >
        <thead>
          <tr>
            {mCols.map((col, index) => {
              return <th key={index}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {source?.map((data, index) => {
            const tds: JSX.Element[] = [];
            !rank ||
              tds.push(<td key="-1">{`${type ? '' : 'NO.'}${++index}`}</td>);
            Object.keys(data).forEach((key, index2) => {
              const col = mCols.find(col => col.dataIndex === key);
              // ? 过滤dataindex里面 col 没有的字段
              if(col){
                tds.push(
                  <td key={index2}>
                    {(col &&
                      col.render &&
                      col.render(
                        data[col?.dataIndex ?? 0] + `${col && col?.unit || ''}`,
                      )) ??
                      data[col?.dataIndex ?? 0] + `${col && col?.unit || ''}`}
                  </td>,
                );
              }

            });
            return (
              <tr className={divider ? 'divider' : ''} key={index}>
                {tds}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Scroll>
  );
};

export default YlTable;
