import React from "react";
import styled, { keyframes } from "styled-components";
import Color from 'color'

const Elastic = ({primaryColor}:{
  primaryColor?:string
}) => {
  const color = Color(primaryColor ?? '#6767fa')

  const loadingAnimate = keyframes`
    0% {
      width: 50pt;
      height: 50pt;
      margin-top: 0;
    }
    25% {
      height: 4pt;
      margin-top: 23pt;
    }
    50% {
      width: 4pt;
    }
    75% {
      width: 50pt;
    }
    100% {
      width: 50pt;
      height: 50pt;
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
    width: 50pt;
    height: 50pt;
    border-radius: 100%;
    border: ${color.hex()} 4pt solid;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    animation: ${loadingAnimate} 1s infinite;
  `

{/* <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.loader}></div>
      </div>
    </div> */}
  return (
    <Loading>
      <Container>
        <Loader></Loader>
      </Container>
    </Loading>
  );
};
export default Elastic;
