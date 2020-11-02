import React,{ useState,CSSProperties, useEffect } from 'react'

import styles from './index.less'

export interface YlTabProps {
  tabArrs:Array<string>;
  callback:Function;
  style?:CSSProperties;
  itemStyle?:CSSProperties;
  styleNo?:1|2|3|4|5;
}


const YlTab: React.FC<YlTabProps>= (props:YlTabProps) => {
  const { tabArrs,callback,style,itemStyle } = props;
  const [ currentSelected,setCurrentSelected ] = useState(0)
  useEffect(() => {
    callback(currentSelected)
  },[currentSelected])
  return <div style={style} className={styles[`tab${props?.styleNo ?? ''}`]}>
    {tabArrs.map((tab,index) => {
      return <span style={itemStyle} key={`tab${index}`} className={index === currentSelected ? styles.selected : null} onClick={() => setCurrentSelected(index)}>{tab}</span>
    })}
  </div>
}

export default YlTab
