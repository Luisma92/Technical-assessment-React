import styled from "styled-components";

export const StyledDrawer = styled.div`
    position: absolute;
    height: 100vh;
    width: 200px;
    background-color: orange;
    transition: all 0.3s ease-in-out;
    transform: ${props => props.isOpen ? 'translate(0)' : 'translate(-200px)'};
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    position:absolute;
`