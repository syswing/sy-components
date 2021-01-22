import React, { CSSProperties, useState, useEffect } from 'react'
import styled from 'styled-components'

// ? 默认配置

const fontSize = 16
const margin = 6

export interface SlideTabProps {
  tabArrs: string[];
  style?: CSSProperties;
  callback?: Function;
  tabFontSize?:number; 
  tabMargin?:number;
}
const SlideLine = styled.div`
  position: absolute;
  bottom: 0;
  height: 0.1vh;
  background: #1D93F9;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const TabWarpper = styled.div`
  display: flex;
  font-size: ${(props: { tabFontSize: any }) => props?.tabFontSize ?? fontSize}px;
  padding-bottom:${(props: { tabMargin: any }) => props?.tabMargin * 0.4 ?? margin}px;
  position: relative;
  color:#ABADB5;
  & span{
    margin: 0 ${(props: { tabMargin: any }) => props?.tabMargin ?? margin}px;
    cursor: pointer;
  }
  & span.selected{
    color:#1D93F9;
  }
  & div{
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
`
const getStringLen = (str:string) => {
  // ! 未过滤符号

  const numbersLengthRegex = /[0-9]/g
  const lettersLengthRegex = /[a-z]|[A-Z]/g
  const numberLength = str.match(numbersLengthRegex)
  const lettersLength = str.match(lettersLengthRegex)
  const restString = str.replace(numbersLengthRegex,'').replace(lettersLengthRegex,'')
  return [(numberLength?.length ?? 0),(lettersLength?.length ?? 0),restString.length ?? 0]
}

export default (props: SlideTabProps) => {

  const { tabArrs, style, callback,tabFontSize,tabMargin } = props
  const defaultStringLeng = getStringLen(tabArrs[0])
  const [currentSelected, setCurrentSelected] = useState(0)
  const [barWidth, setBarWidth] = useState(defaultStringLeng[0] * (tabFontSize ?? fontSize) / 2 + defaultStringLeng[1] * (tabFontSize ?? fontSize) / 2 + defaultStringLeng[2] * (tabFontSize ?? fontSize))
  const [ translateX,setTranslateX ] = useState(tabMargin)

  useEffect(() => {
    if(callback){
      callback(currentSelected)
    } 
  }, [currentSelected])

  return <TabWarpper tabFontSize={tabFontSize} tabMargin={tabMargin} style={style}>
    {tabArrs.map((tab, index) => {
      return <span className={index === currentSelected ? 'selected' : ''} key={`tab_${index}`} onClick={(e) => {
        e.preventDefault()
        // @ts-ignore
        setTranslateX(e.target.offsetLeft)
        setCurrentSelected(index)
        // @ts-ignore
        setBarWidth(e.target.clientWidth)
      }}>{tab}</span>
    })}
      <SlideLine style={{
        width: `${barWidth}px`,
        transform: `translateX(${translateX}px)`
      }}></SlideLine>
  </TabWarpper>
}


