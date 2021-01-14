import React from "react";
import _ from "lodash";
import styled from "styled-components";

type Source = {
  [propName: string]: any;
};

interface TableCols {
  dataIndex: string;
  title?: string;
  render?: Function;
  unit?: string;
  width?: string | number;
}

export type Order = "desc" | "asc";

export interface YlTableProps {
  source: Source[];
  rank?: string;
  cols: TableCols[];
  order?: Order;
  max?: number;
  type?: "noNO";
  LineHeight?: number;
  divider?: boolean;
  styles?: React.CSSProperties;
  scroll?: string;
}

interface ScrollProps {
  max: number;
  children: React.ReactElement;
  LineHeight?: number;
}

// ? 对字段进行快速排序
// ? array.sort 排序算法 判断数组长度 选择 归并 插入 双轴快速排序
export const quickSort = (arr: any[], field: string, order: Order) => {
  return order === "desc"
    ? arr?.sort((a, b) => b[field] - a[field])
    : arr?.sort((a, b) => a[field] - b[field]);
};

const XHidden = styled.div`
  overflow-x: hidden;
`;

const NormalTabel = styled.table`
  width: ${(props: { type: string; rank: any; }) => props?.type !== 'noNO' && !!props?.rank ? '95%' : '100%'};
  text-align: center;
  ${(props: { rank: any; }) => {
    if(!props?.rank) return `
      tbody tr:nth-child(odd) {
        background-color: rgba(39, 114, 239, 0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      .1);
      }
    `
  }}
  th{
    color: #0099ff;
  }
  ${(props: { rank: any; type: string; }) => {
    if(!!props?.rank && props.type === 'noNO'){
      return `
        tbody tr {
          margin: 2rem 0;
          &:nth-child(1) td:first-of-type {
            background: linear-gradient(to bottom, #f54545, #f54545) bottom
              no-repeat;
            background-size: 26% 55%;
            background-position: 50% 50%;
          }
          &:nth-child(2) td:first-of-type {
            background: linear-gradient(to bottom, #ff8547, #ff8547) bottom
              no-repeat;
            background-size: 26% 55%;
            background-position: 50% 50%;
          }
          &:nth-child(3) td:first-of-type {
            background: linear-gradient(to bottom, #ffac38, #ffac38) bottom
              no-repeat;
            background-size: 26% 55%;
            background-position: 50% 50%;
          }
          & td:first-of-type {
            background: linear-gradient(to bottom, #0099ff, #0099ff) bottom
              no-repeat;
            background-size: 26% 55%;
            background-position: 50% 50%;
          }
        }
      `
    }else{
      return `
        tbody tr {
          &:nth-child(1) td:first-of-type {
            background: linear-gradient(to bottom, #f54545, #f54545) bottom
              no-repeat;
            background-size: 68% 20%;
            background-position: 50% 75%;
          }
          &:nth-child(2) td:first-of-type {
            background: linear-gradient(to bottom, #ff8547, #ff8547) bottom
              no-repeat;
            background-size: 68% 20%;
            background-position: 50% 75%;
          }
          &:nth-child(3) td:first-of-type {
            background: linear-gradient(to bottom, #ffac38, #ffac38) bottom
              no-repeat;
            background-size: 68% 20%;
            background-position: 50% 75%;
          }
          & td:first-of-type {
            background: linear-gradient(to bottom, #0099ff, #0099ff) bottom
              no-repeat;
            background-size: 68% 20%;
            background-position: 50% 75%;
          }
        }
      `
    }
  }}
`
const TH = styled.th`
  color: #0099ff;
`;
const TD = styled.td`
  min-width: ${(props: { width: string | number }) =>
    props?.width ? props.width : "fit-content"};
`;
const COL = styled.col`
  min-width: ${(props: { width: string | number }) =>
    props?.width ? props.width : "fit-content"};
`;
const DividerTr = styled.tr`
  ${(props: { divider: any; }) => !props?.divider && "border-bottom:1px dashed #707070;"}
`;
const ScrollInner = styled.div`
  overflow-y: scroll;
  width: ${(props: { scroll: any; }) => props?.scroll ? "100%" : "calc( 100% + 16px )"};
  ${(props: { scroll: any; }) => props?.scroll ?? null}
`;

const YlTable: React.FC<YlTableProps> = (props: YlTableProps) => {
  const { source, cols, rank, order, type, divider, max, scroll } = props;

  const mCols = _.cloneDeep(cols);
  const LineHeight = props.LineHeight ?? 28;
  
  const Scroll = (props: ScrollProps) => {
    const { max, LineHeight } = props;

    const style = {
      height: `${(max + 1) * ((LineHeight ?? 28) + 3)}px`,
    };

    return (
      <XHidden>
        <ScrollInner scroll={scroll} style={style}>{props.children}</ScrollInner>
      </XHidden>
    );
  };

  if (rank) {
    mCols.unshift({
      dataIndex: "index",
      title: "排名",
      width: "100px",
    });
    // ? 对字段进行排序

    quickSort(source, rank, order ?? "desc");

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
      <table
        style={{
          minWidth: "calc( 100% - 10px )",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          {mCols.map((_col, index) => {
            return <COL width={_col.width} key={`table_col_${index}`}></COL>;
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
          rank={rank}
          type={type}
          style={{ lineHeight: `${LineHeight}px`, ...props?.styles }}
        >
          <tbody>
            {source?.map((data, index) => {
              const tds: JSX.Element[] = [];
              !rank ||
                tds.push(
                  <TD width={mCols[0].width ?? "fit-content"} key="-1">{`${
                    type ? "" : "NO."
                  }${++index}`}</TD>
                );
              Object.keys(data).forEach((key, index2) => {
                const col = mCols.find((col) => col.dataIndex === key);
                // ? 过滤dataindex里面 col 没有的字段
                if (col) {
                  tds.push(
                    // ? 如果有设置 width 使用设置的width ，不然就对齐列的宽度
                    <TD key={index2} width={col.width ?? "fit-content"}>
                      {(col &&
                        col.render &&
                        col.render(
                          data[col?.dataIndex ?? 0] +
                            `${(col && col?.unit) || ""}`
                        )) ??
                        data[col?.dataIndex ?? 0] +
                          `${(col && col?.unit) || ""}`}
                    </TD>
                  );
                }
              });
              return <DividerTr divider={divider} key={index}>{tds}</DividerTr>;
            })}
          </tbody>
        </NormalTabel>
      </Scroll>
    </>
  );
};

export default YlTable;
