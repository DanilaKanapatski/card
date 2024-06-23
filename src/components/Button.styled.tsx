import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

export const Button = styled.button`
    color: ${myTheme.colors.button};
    background-color: ${myTheme.colors.card};
    border: 2px solid ${myTheme.colors.button};
    padding: 2px 20px 4px;
    border-radius: 5px;
    line-height: 20px;
    margin-right: 12px;
    font-weight: bold;
    font-size: 10px;
    min-width: 86px;
    cursor: pointer;
    
    &:hover {
        color: ${myTheme.colors.card};
        background-color: ${myTheme.colors.button};
    }
`
