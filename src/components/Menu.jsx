import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../Pages/Home";

const Menu = styled.div`
    background-color: #223555;

    width: auto;
    height: 60px;
    display: flex;
    position: relative;

    z-index: 999;

    nav {
        background-color: inherit;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    ul li {
        position: relative;
        padding: 10px;
        height: 100%;
    }

    ul li a:hover li::after {
        content: "";
        height: 3px;
        width: 30px;
        background-color: yellow;
        display: block;
        margin: 0 auto;
    }

    ul li ul li {
        padding: 0;
    }

    ul ul {
        display: none;
        position: absolute;
        width: 100%;
        background-color: #b89b5f;
    }

    ul li:hover ul {
        display: block;
        transition: 0.3s;
        margin-left: -10px;
    }

    ul ul li a {
        display: block;
        text-align: center;
        height: 100%;
    }

    ul li a:hover {
        transition: 0.2s;
        color: #d4e3ff;
    }
`;

const NavLink = styled(Link)`
    font-family: "Roboto Slab", serif;
    color: white;
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 300;
    padding: 10px;
    display: inline-block;
`;

export default function () {
    return (
        <Menu>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Home" exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About"> Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Practice-Areas">
                            Practice Areas &or;
                        </NavLink>

                        <ul>
                            {/* Tag no lugar da ul */}
                            <li>
                                <NavLink to="/Business">Business</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Insurance">Insurance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Divorce">Divorce</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Industrial">Industrial</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Finance">Finance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Conciliation">Conciliation</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/News"> News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact"> Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </Menu>
    );
}
