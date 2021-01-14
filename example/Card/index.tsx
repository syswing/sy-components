import React from "react";
import styled from "styled-components";
const transition = "all 0.3s cubic-bezier(.25,.8,.25,1)";

const boxShadows = [
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
];

const CardWarpper = styled.div`
  ${ (props: { styles: { float: any; }; }) => props?.styles?.float ? `float:${props?.styles.float};` : null}
  background: #fff ;
  border-radius: 2px;
  display: ${(props: { styles: { display: any; }; }) => props?.styles?.display ?? 'inline-block'};
  margin: 1rem;
  position: relative;
  padding:1rem;
  box-shadow: ${boxShadows[0]};
  transition: ${transition};
  h4{
    margin:0.5rem;
  }
`;
const Card = ({ styles,children,title,contentStyles }: { styles: {
  float?:string,
  display?:string,
},children:React.ReactChild,title?:string,contentStyles?:React.CSSProperties }) => {

  return <CardWarpper styles={styles}>
    {title ? <h4>{title}</h4>:null}
    <div style={contentStyles}>{children}</div>
  </CardWarpper>;
};
export default Card;
