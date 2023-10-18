import React, { useState, useEffect } from 'react';
import { auth } from 'firebaseInit/firebaseInit';

import {
  FormContainer,
  FormHeader,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from './CreatePostForm.styled';

export const CreatePostForm = ({ onCreatePost, getUserName }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  // Зробимо запит за ім'ям користувача при завантаженні компонента
  useEffect(() => {
    // Отримуємо ім'я користувача на основі userId
    const userId = auth.currentUser.uid; // Замініть на ідентифікатор поточного користувача
    getUserName(userId)
      .then(name => setUserName(name))
      .catch(error =>
        console.error('Помилка отримання імені користувача:', error)
      );
  }, [getUserName]); // Порожній масив вказує, що цей ефект виконується лише після монтажу компонента

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !content) {
      alert('Please, fill all fields');
      return;
    }

    const newPost = {
      title,
      content,
      author: userName, // Додайте ім'я користувача до поста
      comments: [],
    };

    onCreatePost(newPost);

    setTitle('');
    setContent('');
  };

  return (
    <FormContainer>
      <FormHeader>Create new post</FormHeader>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>Заголовок:</FormLabel>
          <FormInput type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <FormLabel>Текст поста:</FormLabel>
          <FormTextarea value={content} onChange={handleContentChange} />
        </div>
        <FormButton type="submit">Створити пост</FormButton>
      </form>
    </FormContainer>
  );
};
