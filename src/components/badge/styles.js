import styled from "styled-components"

export const StyledBadge = styled.div`
    background-color: ${props => props.color};
    border-radius: 10px;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    padding: .25rem;
    margin: .125rem;
    width: fit-content;
    display: flex;
`