import React from "react";
import styled, {css} from "styled-components/macro"
import { Link} from "react-router-dom";
import { menuData} from "../data/MenuData";
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.png';

const Nav = styled.nav`
background:#302D2D;
height: 78px;
display: flex;
justify-content: center;
z-index: 100;
position: fixed;
width: 100%;

`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 68px;
height: 100%;
cursor: pointer;
text-decoration: none;
&: hover{
    color: #D5AEAF;
}
`;

const Logo = styled.img`
    position: absolute;
    width:157px;
    height:93px;
    top:-0.5rem;
    left: 94px;`;

const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width:768px){
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-50%, 25%);
        color: #fff;
    } `;
    
const NavMenu = styled.div`
    
    display: flex;
    align-items: center;
    font-size:20px;

@media screen and (max-width:768px){
    display: none;}
}`;

const NavMenuLinks = styled(Link)`
${NavLink}`;


const NavBar = ({toggle}) => {
    return (
        <Nav>
            <Logo src={logo} to="/"></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    );
  }
  
  export default NavBar;