import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './index.less'

const Bubbly = ({children}:{children:React.ReactChild}) => {

  const [ isanimate,setIsanimate ] = useState(false)

  const animate = () => {
    setIsanimate(true) 
    setTimeout(function(){
      setIsanimate(false)
    },700);
  }

  return <button onClick={animate} className={classNames(
    styles.bubblyButton,
    isanimate ? styles.animate : ''
  )}>{children}</button>
}
export default Bubbly