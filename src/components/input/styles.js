import styled from "styled-components"

export const CustomImput = styled.input`
    margin: .5rem;
    height: 35px;
    border-radius: 8px;
    background-color: #242424;
    color: #fff;
    font-size: 16px;
    padding-left: 10px;
    border: ${props => props.error.length ? '1px solid red' : 0};
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    
`

export const Block = styled.div`
    display: block;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 767px){
        width: 70%;
    }
`