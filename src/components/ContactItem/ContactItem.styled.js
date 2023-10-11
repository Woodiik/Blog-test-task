import styled from '@emotion/styled';
import { ClipLoader } from 'react-spinners';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  border: 1px solid #696969;
`;

export const DeleteButton = styled.button`
  position: relative;
  width: 100px;
  height: 32px;
  padding: 8px;
  margin-left: 8px;
  background-color: #808080;
  color: white;
  border: none;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: #696969;
  }
  :active {
    transform: scale(0.9);
  }
  :disabled {
    background-color: rgb(128, 128, 127, 0.5);
  }
`;

export const Loader = styled(ClipLoader)`
  position: absolute;
  top: 4px;
  left: 6px;
`;
