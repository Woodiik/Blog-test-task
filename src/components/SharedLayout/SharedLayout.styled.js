import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  font-size: 20px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 32px;
  text-decoration: none;
  color: black;
  border-radius: 50%;
  :first-child {
    margin-left: 40px;
  }
  :last-child {
    margin-right: 40px;
  }
  :hover {
    background-color: #dcdcdc;
  }
  &.active {
    border-left: 4px solid black;
    border-right: 4px solid black;
  }
`;
export const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogOutButton = styled.button`
  padding: 10px 24px;
  margin-left: 40px;
  margin-right: 40px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #808080;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: #696969;
  }
  :active {
    transform: scale(0.9);
  }
`;
