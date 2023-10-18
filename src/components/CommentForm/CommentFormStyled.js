import styled from 'styled-components';

export const CommentFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const CommentInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CommentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
