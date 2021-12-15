import React from "react"
import { StyledText } from "./styles"

export const Text = ({ size, lineHeight, color, font, weight, uppercase, css, ...props}) => (
    <StyledText size={size} lineHeight={lineHeight} color={color} font={font} weight={weight} uppercase={uppercase} css={css} {...props} />
)
Text.defaultProps = {
    size: '1rem',
    lineHeight: '1',
    color: '#ffffff',
    font: 'Segoe UI',
    weight: '500',
    uppercase: 'none'
}
