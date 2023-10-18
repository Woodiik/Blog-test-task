import styled from 'styled-components';

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e4e4e4;
  }
  &:focus {
    outline: none;
  }
`;

export const UserProfileInfo = styled.div`
  width: 100%;
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const ProfileData = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
  }
`;

export const ProfileButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
`;
