import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import { House } from '../../components/image/svg';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';
export const NotFoundPage: React.FunctionComponent<IPagesProps> = ({
    history,
}: IPagesProps): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <>
            <Navigation className="navigation-component" history={history}>
                <HeaderNavigation className="header-navigation-component" />
                <BurgerMenu
                    className="header-navigation-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
                <Menu
                    className="menu-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            </Navigation>
            <HomePageMain className="homepage-main">
                <Content>
                    <ClipText> 404 - Page Not Found</ClipText>

                    <Paragraph>
                        The page you are looking for is not currently available,
                        you can head back home below: -{' '}
                    </Paragraph>

                    <HomeLink to="/">
                        <House />
                        Home
                    </HomeLink>
                </Content>
            </HomePageMain>
            <Footer className="footer-component" />
        </>
    );
};

const ClipText = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 80px;
    font-weight: 800;
    background-image: url('https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80');
    background-position: 100px 250px;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    color: #2c353c;
`;

const HomeLink = styled(NavLink)`
    border-style: none;
    margin: 1rem;
    padding: 2rem;
    font-weight: 800;
    border-radius: 25px;
    text-decoration: none;
    color: #2c353c;
    font-family: 'Open Sans', sans-serif;
    svg {
        font-weight: 700;
        color: #2c353c;
    }
`;
const Paragraph = styled.p`
    padding: 2rem;
    max-width: 750px;
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
Paragraph.displayName = 'Paragraph';

const Content = styled.section`
    width: 100%;
    display: flex;
    padding: 2rem;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    text-align: center;
    ${customMedia.lessThan('small')`
       padding: 1rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
const HomePageMain = styled.main`
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
HomePageMain.displayName = 'HomePageMain';