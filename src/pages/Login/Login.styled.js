import styled from 'styled-components';

import { ClipLoader } from 'react-spinners';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const LogInButton = styled.button`
  position: relative;
  padding: 8px;
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
    background-color: rgb(128, 128, 128, 0.5);
  }
`;

export const Loader = styled(ClipLoader)`
  position: absolute;
  top: 4px;
  left: 6px;
`;
