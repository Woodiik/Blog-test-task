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
  background-color: #dcdcdc;
`;

export const StartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 48px;
  background-color: #808080;
  color: white;
  border: none;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: #696969;
  }
  :active {
    transform: scale(0.9);
  }
`;
