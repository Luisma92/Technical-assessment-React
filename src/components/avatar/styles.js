import styled, {css} from "styled-components"

const styleSizing = css`
    height: ${props => props.size};
    width: ${props => props.size};
    ${props => props.css}
`;
export const AvatarImg = styled.div`
    ${styleSizing}
    border-radius: 50%;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
`;
export const AvatarLetter = styled.div`
    background-color: ${props => props.getColorByName(props.firstName)};
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    border-radius: 50%;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    ${styleSizing}
`;