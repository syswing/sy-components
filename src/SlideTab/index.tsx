import React, { CSSProperties, useState, useEffect } from 'react'
import styled from 'styled-components'

const fontSize = 16
const margin = 6

// todo 由于字体的原因，下划线在滑动的过程中会偏移，使用等宽字体可以解决

interface SlideTabProps {
  tabArrs: string[];
  style?: CSSProperties;
  callback: Function;
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
  font-size: ${fontSize}px;
  height: 2.5vh;
  position: relative;
  color:#ABADB5;
  & span{
    height: 2.1vh;
    line-height: 2.1vh;
    margin: 0 ${margin}px;
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

const SlideTab = (props: SlideTabProps) => {


  const { tabArrs, style, callback } = props
  
  const defaultStringLeng = getStringLen(tabArrs[0])
  const [currentSelected, setCurrentSelected] = useState(0)
  const [barWidth, setBarWidth] = useState(defaultStringLeng[0] * fontSize / 2 + defaultStringLeng[1] * fontSize / 2 + defaultStringLeng[2] * fontSize)
  const translateX = tabArrs.slice(0, currentSelected).reduce((arr, cur) => arr + getStringLen(cur)[0] * fontSize / 2 + getStringLen(cur)[1] * fontSize / 2 + getStringLen(cur)[2] * fontSize, 0)

  useEffect(() => {
    callback(currentSelected)
  }, [currentSelected])

  return <TabWarpper style={style}>
    {tabArrs.map((tab, index) => {
      return <span className={index === currentSelected ? 'selected' : ''} key={`tab_${index}`} onClick={() => {
        setCurrentSelected(index)
        setBarWidth(getStringLen(tabArrs[index])[0] * fontSize / 2 + getStringLen(tabArrs[index])[1] * fontSize / 2 + getStringLen(tabArrs[index])[2] * fontSize)
      }}>{tab}</span>
    })}

      <SlideLine style={{
        width: `${barWidth}px`,
        transform: `translateX(${(currentSelected ? translateX : 0) + ((currentSelected * 2 + 1) * margin )}px)`
      }}></SlideLine>

  </TabWarpper>
}

export default SlideTab
