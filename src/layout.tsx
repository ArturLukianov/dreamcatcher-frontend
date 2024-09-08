import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './style.css';
import { css } from '@emotion/react'
import styled from '@emotion/styled';


function NavbarLink(props: { to: string, text: string }) {
    const { to, text } = props;

    return (
        <Link to={to}>{text}</Link>
    )
}

function Navbar() {
    return (
        <div css={css`
            display: flex;
            flex-direction: row;
            gap: 2px;
        `}>
            <NavbarLink to='' text='Diary' />
            <NavbarLink to='map/graph' text='Graph' />
            <NavbarLink to='map/street' text='Street' />
        </div>
    )
}

const Logo = styled.h1`
font-size: 20px;
font-weight: regular;
`

const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1%;
`

export default function Layout() {
    return (
        <div>
            <Header>
                <Logo>DreamCatcher</Logo>
                <Navbar />
            </Header>
            <Outlet />
        </div>
    )
}