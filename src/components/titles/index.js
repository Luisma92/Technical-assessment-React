import styled from "styled-components"

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    margin-block-end: .25em;
    ${props => props.css}
    @media screen and (min-width: 767px){
        font-size: 2.5rem;
    }
`
export const H2 = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    ${props => props.css}
    @media screen and (min-width: 767px){
        font-size: 1.25rem;
    }
`
export const H3 = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    font-size: 1rem;
    ${props => props.css}
    @media screen and (min-width: 767px){
        font-size: 1.25rem;
    }
`
