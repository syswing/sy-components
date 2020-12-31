import React, { useState, CSSProperties, useEffect } from "react";
import styled from "styled-components";

export interface YlTabProps {
  tabArrs: Array<string>;
  callback: Function;
  style?: CSSProperties;
  itemStyle?: CSSProperties;
  styleNo?: 1 | 2 | 3 | 4;
}
const SyTab = styled.div`
${(props: { styleNo: number }) =>
  props?.styleNo === 1
    ? `display: flex;
      font-size: 0.12rem;
      width: 7rem;
      height: 1.5rem;`
    : `display: flex;
      font-size: 16px;`}
${(props: { styleNo: number }) =>
  props?.styleNo === 1
    ? `& span {
        text-align: center;
        display: inline-block;
        padding: 0.02rem 0.1rem;
        color: #f2ffff;
        width: 4.2rem;
        height: 1.8rem;
        background: rgba(39, 114, 239, 0.2);
        line-height: 1.8rem;
        margin: auto;
        cursor: pointer;
        opacity: 0.3;
        transition: all 0.3s ease-out;
      }`
    : `& span{
      text-align: center;
      display: inline-block;
      padding: 1px 13px;
      color:#BABABA;
      background:#0F1D3F;
      line-height: 1.8rem;
      width:90px;
      height:30px;
      margin:auto;
      position: relative;
      cursor: pointer;
      opacity: 0.3;
      transition: all .3s ease-out;
      border-radius: 3px;
    }`}
${(props: { styleNo: number }) =>
  props?.styleNo === 1
    ? `
      & span.selected{
        background:linear-gradient(to bottom, #0099FF, #0099FF) left top no-repeat, linear-gradient(to left, #0099FF, #0099FF) right top no-repeat, linear-gradient(to bottom, #0099FF, #0099FF) right top no-repeat, linear-gradient(to right, #0099FF, #0099FF) left top no-repeat, linear-gradient(to left, #0099FF, #0099FF) left bottom no-repeat, linear-gradient(to bottom, #0099FF, #0099FF) left bottom no-repeat, linear-gradient(to left, #0099FF, #0099FF) right bottom no-repeat, linear-gradient(to left, #0099FF, #0099FF) right bottom rgba(39, 114, 239,.2) no-repeat;
        background-size: 0.5rem 0.2rem;
        opacity: 1;
      }  
    `
    : (props: { styleNo: number }) =>
        props?.styleNo === 2
          ? `
        & span.selected{
          color:#FFFFFF;
          background:linear-gradient(270deg,rgba(19,50,94,1) 0%,rgba(34,94,160,1) 100%);
          opacity: 1;
          width:90px;
          height:30px;
        }
        & span.selected::before{
          content: ' ';
          position: absolute;
          width: 4px;
          background: rgba(14,214,245,1);
          height: 24px;
          left: 0px;
          top: 2px;
        }
      `
          : (props: { styleNo: number }) =>
              props?.styleNo === 3
                ? `
      & span.selected{
        color:#FFFFFF;
        background:linear-gradient(180deg,rgba(19,129,206,0) 0%,rgba(19,129,206,1) 100%);
        opacity: 1;
        width:90px;
        height:30px;
      }
      `
                : `
      & span.selected{
        color:#FFFFFF;
        background:#00B1FF;
        opacity: 1;
        width:90px;
        height:30px;
      }
      `}
`;
const YlTab: React.FC<YlTabProps> = (props: YlTabProps) => {
  const { tabArrs, callback, style, itemStyle } = props;
  const [currentSelected, setCurrentSelected] = useState(0);

  useEffect(() => {
    callback(currentSelected);
  }, [currentSelected]);

  return (
    <SyTab style={style} styleNo={props.styleNo}>
      {tabArrs.map((tab, index) => {
        return (
          <span
            style={itemStyle}
            key={`tab${index}`}
            className={index === currentSelected ? "selected" : ""}
            onClick={() => setCurrentSelected(index)}
          >
            {tab}
          </span>
        );
      })}
    </SyTab>
  );
};

export default YlTab;
