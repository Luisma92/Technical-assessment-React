import styled from "styled-components"

export const CustomButton = styled.button`
    height: 35px;
    min-width: 5rem;
    margin: .5rem;
    align-items: center;
    font-size: 1rem;
    font-family: 'Segoe UI';
    border: 0;
    border-radius: 8px;
    ${props => props.css}
    @media screen and (max-width: 767px){
        width: 100%;
    }

    :hover{
        ${props => props.hover}
    }
`