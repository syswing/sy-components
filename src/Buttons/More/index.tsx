import React from "react";
import styled from "styled-components";


const More = ({
  text
}:{
  text:string
}) => {

  const white = '#fff';
  const black = '#282936'

  const duration = '0.45s'
  const property = 'all'
  const ease = 'cubic-bezier(0.65,0,.076,1)'

  const LearnMore = styled.button`
    width: 12rem;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    height: auto;
    .circle {
      transition:${property} ${duration} ${ease};
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: ${black};
      border-radius: 1.625rem;
      .icon {
        transition:${property} ${duration} ${ease};
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: ${white};
        &.arrow {
          transition:${property} ${duration} ${ease};
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      transition:${property} ${duration} ${ease};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: ${black};
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
    
    &:hover {
      .circle {
        width: 100%;
        .icon {
          &.arrow {
          background: ${white};
          transform: translate(1rem, 0);
          }
        }
      }
      .button-text {
        color: ${white};
      }
    }
  `

  return (
    <LearnMore>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </LearnMore>
  );
};
export default More;
