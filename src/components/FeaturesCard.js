import React from 'react'
import { FeatCard, FeatTextBig, FeatTextSmall, FeatIcon } from './StyledComponent'

const FeaturesCard = ({children, header, text}) => {
  return (
    <div>
        <FeatCard>
            <FeatIcon>
                {children}
            </FeatIcon>
            <FeatTextBig
            size = {1.5}
            height = {2}
            >
                {header}
            </FeatTextBig>
            <FeatTextSmall
            weight = {500}
            size = {1.1}
            height = {1.8}
            >
                {text}
            </FeatTextSmall>
        </FeatCard>
    </div>
  )
}

export default FeaturesCard