import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#D5AEAF' : 'CD83F')};
white-space: nowrap;
outline: none;
border: none;
border-radius:7px;
min-width: 237px;
max-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '16px 40px' :
 '14px 24px')};
color: ${({primary}) => (primary ? '#302D2D' : '#000d1a')};
font-size: ${({ big }) => (big ? '24px' : '14px')};

&:hover{
    transform: translateY(-2px);
}
 `;
