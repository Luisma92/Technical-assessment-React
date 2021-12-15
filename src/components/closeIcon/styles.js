import styled from "styled-components"

export const Svg = styled.svg`
    margin-right: .5rem;
    ${props => props.css}

    & :hover{
        fill: #0070ff;
    }
`