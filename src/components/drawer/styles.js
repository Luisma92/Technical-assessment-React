import styled from "styled-components"

export const StyledDrawer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 89%;
    background-color: #2d2d2d;
    transition: all 0.3s ease-in-out;
    transform: ${props => props.isOpen ? 'translate(0)' : 'translate(100%)'};
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
    z-index: 12;
    padding: 2rem;
    overflow-y: auto;
    @media screen and (min-width: 768px){
        width: 50%;
    }
`

export const DrawerInfo = styled.div`
    align-items: flex-start;
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #595a5d59;
    z-index: 11;
    backdrop-filter: blur(4px);
`