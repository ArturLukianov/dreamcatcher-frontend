import React from 'react';
import ReactElement from 'react';
import { Link, Outlet } from "react-router-dom";
import './style.css';
import { css } from '@emotion/css'
import styled from '@emotion/styled';
import { Map, NotebookText, Waypoints } from 'lucide-react';


function NavbarLink(props: { to: string, text?: string, icon: ReactElement }) {
    const { to, text, icon } = props;

    return (
        <Link className={css`
            text-decoration: none;
            color: var(--secondary);
            padding: 5px;
            border-radius: 2px;
            font-size: 20px;
            `} to={to}>
            {icon}
        </Link>
    )
}

function Navbar() {
    return (
        <div className={css`
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
        `}>
            <div className={css`
            display: flex;
            flex-direction: row;
            gap: 10px;
        `}>
                <NavbarLink to='' text='Diary' icon={<NotebookText/>} />
                <NavbarLink to='map/graph' text='Graph' icon={<Waypoints/>} />
                <NavbarLink to='map/street' text='Street' icon={<Map/>}/>
            </div>
        </div>
    )
}

const Logo = styled.h1`
font-size: 30px;
font-weight: regular;
`

const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1%;
width: 100%;
`

export default function Layout() {
    return (
        <div className={css`
         margin: 10px;
         width: 100%;
        `}>
            <Header>
                <Logo>DreamCatcher</Logo>
                <Navbar />
            </Header>
            <Outlet />
        </div>
    )
}