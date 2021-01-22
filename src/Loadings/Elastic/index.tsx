import React from "react";
import styled, { keyframes } from "styled-components";
import Color from 'color'

export interface ElasticProps  {
  primaryColor?:string,
  width?:number,
  height?:number,
}

const Elastic = ({primaryColor,width,height}:{
  primaryColor?:string,
  width?:number,
  height?:number,
}) => {
  const color = Color(primaryColor ?? '#6767fa')

  const loadingAnimate = keyframes`
    0% {
      width: ${width ?? 50}pt;
      height: ${height ?? 50}pt;
      margin-top: 0;
    }
    25% {
      height: 4pt;
      margin-top: ${width ? width / 2 : 23}pt;
    }
    50% {
      width: 4pt;
    }
    75% {
      width: ${width ?? 50}pt;
    }
    100% {
      width: ${width ?? 50}pt;
      height: ${height ?? 50}pt;
      margin-top: 0;
    }
  `

  const Loading = styled.div`
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-content: center;
  `

  const Container = styled.div`
    min-height: 60pt;
  `

  const Loader = styled.div`
    width: ${width ?? 50}pt;
    height: ${height ?? 50}pt;
    border-radius: 100%;
    border: ${color.hex()} 4pt solid;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    animation: ${loadingAnimate} 1s infinite;
  `
  return (
    <Loading>
      <Container>
        <Loader></Loader>
      </Container>
    </Loading>
  );
};
export default Elastic;
