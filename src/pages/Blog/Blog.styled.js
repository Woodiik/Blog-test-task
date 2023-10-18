import styled from 'styled-components';

export const BlogContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const PostItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const PostTitle = styled.h3`
  color: #007bff;
  font-size: 18px;
  margin: 0;
`;

export const PostAuthor = styled.p`
  color: #888;
  margin: 10px 0;
`;

export const PostContent = styled.p`
  color: #333;
`;

export const CommentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
