import React from 'react';
import _ from 'lodash';
import styled from 'styled-components'

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
  styles?:React.CSSProperties;
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

const XHidden = styled.div`
  overflow-x: hidden;
`

const ScrollInner = styled.div`
  overflow-y: scroll;
  width:  calc(100% + 20px); 
`


const Scroll = (props: ScrollProps) => {
  const { max, LineHeight } = props;

  const style = {
    height: `${(max + 1) * ((LineHeight ?? 28) + 3)}px`,
  };

  return (
    <XHidden>
      <ScrollInner style={style}>
        {props.children}
      </ScrollInner>
    </XHidden>
  );
};

const YlTable: React.FC<YlTableProps> = (props: YlTableProps) => {
  
  const { source, cols, rank, order, max, type, divider } = props;
  const mCols = _.cloneDeep(cols);
  const LineHeight = props.LineHeight ?? 28;

  const DividerTr = styled.tr`
    ${!divider && 'border-bottom:1px dashed #707070;'}
  `

  const NormalTabel = !rank ? styled.table`
    width:100%;
    text-align: center;
    tbody tr:nth-child(odd){
      background-color: rgba(39, 114, 239,.1);
    }
    th{
      color:#0099FF;
    }
  `: type === 'noNO' ?  styled.table`
    width:100%;
    text-align: center;

    th{
      color:#0099FF;
    }
    tbody tr{
      margin:2rem 0;
      &:nth-child(1) td:first-of-type{
        background:linear-gradient(to bottom, #F54545, #F54545) bottom no-repeat;
        background-size: 26% 55%;
        background-position: 50% 50%;
      }
      &:nth-child(2) td:first-of-type{
        background:linear-gradient(to bottom, #FF8547, #FF8547) bottom no-repeat;
        background-size: 26% 55%;
        background-position: 50% 50%;
      }
      &:nth-child(3) td:first-of-type{
        background:linear-gradient(to bottom, #FFAC38, #FFAC38) bottom no-repeat;
        background-size: 26% 55%;
        background-position: 50% 50%;
      }
      & td:first-of-type{
        background:linear-gradient(to bottom, #0099FF, #0099FF) bottom no-repeat;
        background-size: 26% 55%;
        background-position: 50% 50%;
      }
    }
  ` : styled.table`
      width:95%;
      text-align: center;

      th{
        color:#0099FF;
      }
      tbody tr{
        &:nth-child(1) td:first-of-type{
          background:linear-gradient(to bottom, #F54545, #F54545) bottom no-repeat;
          background-size: 68% 20%;
          background-position: 50% 75%;
        }
        &:nth-child(2) td:first-of-type{
          background:linear-gradient(to bottom, #FF8547, #FF8547) bottom no-repeat;
          background-size: 68% 20%;
          background-position: 50% 75%;
        }
        &:nth-child(3) td:first-of-type{
          background:linear-gradient(to bottom, #FFAC38, #FFAC38) bottom no-repeat;
          background-size: 68% 20%;
          background-position: 50% 75%;
        }
        & td:first-of-type{
          background:linear-gradient(to bottom, #0099FF, #0099FF) bottom no-repeat;
          background-size: 68% 20%;
          background-position: 50% 75%;
        }
      }
    `

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
      <NormalTabel
        style={{ lineHeight: `${LineHeight}px`,...props?.styles }}
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
              <DividerTr key={index}>
                {tds}
              </DividerTr>
            );
          })}
        </tbody>
      </NormalTabel>
    </Scroll>
  );
};

export default YlTable;
