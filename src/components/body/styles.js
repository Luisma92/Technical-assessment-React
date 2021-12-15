import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #121212;
    width: 95%;
    margin: auto;
    height: 100%;
    color: #ffffff;
    margin-top: 3%;

    @media screen and (min-width: 768px){
        width: 80%;
        margin-top: 35%;
    }
    @media screen and (min-width: 860px){
        width: 80%;
        margin-top: 30%;
    }
    @media screen and (min-width: 1024px){
        width: 65%;
        margin-top: 26%;
    }
    @media screen and (min-width: 1280px){
        width: 65%;
        margin-top: 20%;
    }
    @media screen and (min-width: 1440px){
        width: 55%;
    }
`