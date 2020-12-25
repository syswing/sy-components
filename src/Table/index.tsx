import React from 'react';
import _ from 'lodash';
import styled from 'styled-components'

type Source = {
  [propName: string]: any;
};

interface TableCols  {
  dataIndex: string;
  title?: string;
  render?: Function;
  unit?: string;
  width?:string|number;
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
  scroll?:string;
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

const YlTable: React.FC<YlTableProps> = (props: YlTableProps) => {
  
  const { source, cols, rank, order, type, divider,max,scroll } = props;
  
  const mCols = _.cloneDeep(cols);
  const LineHeight = props.LineHeight ?? 28;

  const DividerTr = styled.tr`
    ${!divider && 'border-bottom:1px dashed #707070;'}
  `


  const NormalTabel = !rank ? styled.table`
    width:100%;
    text-align: center;
    /* min-width: '100%'; */
    /* table-layout: 'fixed'; */
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

  const TH = styled.th`
    color:#0099FF;
  `

  const TD = styled.td`
    min-width:${(props: {width:string|number}) => props?.width ? props.width : 'fit-content'}
  `

  const COL = styled.col`
    min-width:${(props: {width:string|number}) => props?.width ? props.width : 'fit-content'}
  `

  const ScrollInner = styled.div`
    overflow-y: scroll;
    width: ${scroll ? '100%' : 'calc( 100% + 16px )'};
    ${scroll ?? null}
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

  if (rank) {
    mCols.unshift({
      dataIndex: 'index',
      title: '排名',
      width:'100px'
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
    <>
      <table style={{
        minWidth: 'calc( 100% - 10px )',
        tableLayout: 'fixed'
      }}>
        <colgroup>
          {mCols.map((_col,index) => {
            return <COL width={_col.width} key={`table_col_${index}`}></COL>
          })}
        </colgroup>
        <thead>
          <tr>
            {mCols.map((col, index) => {
              return <TH key={index}>{col.title}</TH>;
            })}
          </tr>
        </thead>
      </table>
      
      <Scroll max={max ?? 5} LineHeight={LineHeight}>
        <NormalTabel
          style={{ lineHeight: `${LineHeight}px`,...props?.styles }}
        >
          <tbody>
            {source?.map((data, index) => {
              const tds: JSX.Element[] = [];
              !rank ||
                tds.push(<TD width={mCols[0].width ?? 'fit-content'} key="-1">{`${type ? '' : 'NO.'}${++index}`}</TD>);
              Object.keys(data).forEach((key, index2) => {
                const col = mCols.find(col => col.dataIndex === key);
                // ? 过滤dataindex里面 col 没有的字段
                if(col){
                  tds.push(
                    // ? 如果有设置 width 使用设置的width ，不然就对齐列的宽度
                    <TD key={index2} width={col.width ?? 'fit-content'}>
                      {(col &&
                        col.render &&
                        col.render(
                          data[col?.dataIndex ?? 0] + `${col && col?.unit || ''}`,
                        )) ??
                        data[col?.dataIndex ?? 0] + `${col && col?.unit || ''}`}
                    </TD>,
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
    </>
  );
};

export default YlTable;
