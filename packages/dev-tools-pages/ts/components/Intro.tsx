import * as React from 'react';
import styled from 'styled-components';

import { colors, media } from 'ts/variables';

import { Breakout } from './Breakout';
import { Container } from './Container';
import { Alpha, Lead } from './Typography';

const Main = styled.div`
    background-color: ${colors.lightGray};
    padding: 6.25rem;
    display: flex;
    justify-content: space-between;

    ${media.large`
        padding: 2.5rem;
    `};
    ${media.medium`
        display: block;
    `};
`;

const Title = styled(Alpha)`
    margin-bottom: 2.5rem;

    ${media.medium`margin-bottom: 2.25rem;`};
`;

const StyledIntroLead = styled(Lead)`
    max-width: 25.9375rem;
    margin-right: 2rem;
    ${media.medium`
        max-width: 100%;
        margin-bottom: 1.5625rem;
    `};
`;

const StyledIntroAside = styled.div`
    max-width: 32.5rem;
    position: relative;
    ${media.medium`
        max-width: 100%;
    `};
`;

interface IntroProps {
    children?: React.ReactNode;
}

interface IntroLeadProps {
    title: string;
    children?: React.ReactNode;
}

const IntroLead: React.StatelessComponent<IntroLeadProps> = props => (
    <StyledIntroLead as="div">
        <Title>{props.title}</Title>
        {props.children}
    </StyledIntroLead>
);

const IntroAside: React.StatelessComponent<IntroProps> = props => (
    <Breakout>
        <StyledIntroAside>{props.children}</StyledIntroAside>
    </Breakout>
);

const Intro: React.StatelessComponent<IntroProps> = props => (
    <Container wide={true}>
        <Main>{props.children}</Main>
    </Container>
);

export { IntroLead, IntroAside, Intro };
