import {myTheme} from "../styles/Theme.styled";
import styled from "styled-components";

export const Link = styled.a`
    text-decoration: none;
    padding: 4px 20px 6px;
    display: inline-block;
    border: none;
    color: ${myTheme.colors.card};
    background-color: ${myTheme.colors.button};
    
    &:hover {
        color: ${myTheme.colors.button};
        background-color: ${myTheme.colors.card};
        border: 2px solid ${myTheme.colors.button};
    }
`