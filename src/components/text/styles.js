import styled from "styled-components"

export const StyledText = styled.p`
    font-size: ${props => props.size};
    font-family: ${props => props.font};
    line-height: ${props => props.lineHeight};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
    text-transform: ${props => props.uppercase};
    margin-block-start: .5rem;
    margin-block-end: .5rem;
    ${props => props.css}
`