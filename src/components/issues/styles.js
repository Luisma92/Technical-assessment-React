import styled from "styled-components";

export const StyledIssue = styled.div`
    display: flex;
    position: relative;
    background-color: #1d1d1d;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    border-radius: 10px;
    margin: .5rem;
    padding: .75rem;
    cursor: pointer;
`
export const StyledUser = styled.div`
    min-width: 4rem;
    position: relative;
    min-height: 8rem;
    @media screen and (min-width: 768px){
        min-width: 6rem;
    }
`
export const FlexInfo = styled.div`
    display: flex;
    align-items: center;
    ${props => props.css}
    & > span{
        margin-right: 1rem;
    }
`