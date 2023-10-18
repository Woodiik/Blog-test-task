import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  padding: 40px;
  margin-right: auto;
  margin-left: auto;

  text-align: center;
  background-color: #f0f0f0;
`;

export const StartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 48px;
  background-color: #007bff;
  color: white;
  border: none;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
