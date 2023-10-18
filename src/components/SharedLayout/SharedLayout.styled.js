import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-right: 20px;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const LogOutButton = styled.button`
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  padding: 0px 40px;
  font-weight: bold;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    color: #0056b3;
    text-decoration: underline;
  }
`;
