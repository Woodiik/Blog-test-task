import styled from 'styled-components';

export const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CommentItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CommentAuthor = styled.strong`
  color: #333;
`;

export const ReplyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CommentText = styled.p`
  color: #333;
  word-wrap: break-word;
  white-space: pre-wrap;
  max-width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;
