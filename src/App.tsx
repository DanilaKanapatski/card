import React from 'react';
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Button} from "./components/Button.styled";
import {myTheme} from "./styles/Theme.styled";
import logo from "./cardImage.png"
import {Link} from "./components/Link.styled";
import {CardTitle} from "./components/CardTitle.styled";
import {CardText} from "./components/CardText.styled";

function App() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Box>
                <img src={logo} alt='Card'/>
                <ContentWrapper>
                    <CardTitle>Headline</CardTitle>
                    <CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</CardText>
                    <Button as={Link} href={'#'}>See more</Button>
                    <Button>Save</Button>
                </ContentWrapper>
            </Box>
        </>
    );
}

export default App;

const Box = styled.div`
    width: 300px;
    height: 350px;
    margin: 176px auto;
    padding: 10px 10px 22px;
    border-radius: 15px;
    background-color: ${myTheme.colors.card};
    box-shadow: 0 4px 20px 5px ${myTheme.colors.shadow};
    
    &:hover {
        zoom: calc(1.1);
    }
`

const ContentWrapper = styled.div`
    margin-top: 20px;
    padding: 0 0 0 10px;
`

