import React from 'react'
import styled from 'styled-components'

const WaterfallNode = ({children}:{
  children:React.ReactChildren
}) => {

  const Section = styled`
    display: inline-block;
    margin:  0.25rem;
    padding:  1rem;
    width:  100%; 
    background:  #efefef;
  `

  return <Section>
    {children}
  </Section>
}

const Waterfall = ({children}:{
  children:React.ReactChildren
}) => {

  const FallWarpper = styled`
  -moz-column-width: 13em;
  -webkit-column-width: 13em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em; 
    *, *:before, *:after {
      box-sizing:  border-box !important;
    }
  `

  return (
    <FallWarpper>
      {children}
    </FallWarpper>
  )
}
export default {
  Waterfall,
  WaterfallNode
}
