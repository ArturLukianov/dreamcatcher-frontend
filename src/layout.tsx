import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./style.css";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Map, NotebookText, Waypoints } from "lucide-react";

function NavbarLink(props: { to: string; text?: string; icon: React.ReactElement }) {
  const { to, text, icon } = props;

  const location = useLocation();

  const isActive = location.pathname == to;

  return (
    <Link
      className={css`
        text-decoration: none;
        color: var(--primary);
        padding: 10px 10px;
        border-radius: 2px;
        font-size: 20px;
        z-index: 2;
        display: flex;
        ` + " nav-item" + (isActive ? " active" : "")} to={to}>
      {icon}
    </Link>
  );
}

function Navbar() {
  return (
    <div
      className={css`
        position: absolute;
        width: 90%;
        display: flex;
        justify-content: center;
        margin-top: 5px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          background-color: var(--bg-secondary);
          padding: 5px 8px;
          border-radius: 5px;
        `}
      >
        <NavbarLink to="/" text="Diary" icon={<NotebookText size={"25px"} />} />
        <NavbarLink to="/map/graph" text="Graph" icon={<Waypoints size={"25px"} />} />
        <NavbarLink to="/map/street" text="Street" icon={<Map size={"25px"} />} />
        <div className="slider"></div>
      </div>
    </div>
  );
}

const Logo = styled.h1`
  font-size: 30px;
  font-weight: normal;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1%;
  width: 90%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Layout() {
  const location = useLocation();

  const isFPV = location.pathname == "/map/fpv";

  if (isFPV) {
    return <Outlet />;
  }

  return (
    <div
      className={css`
        margin: 10px;
        width: 100%;
      `}
    >
      <Header>
        <Logo>DreamCatcher</Logo>
        <Navbar />
      </Header>
      <Outlet />
    </div>
  );
}
