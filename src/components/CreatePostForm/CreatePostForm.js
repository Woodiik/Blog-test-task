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

  useEffect(() => {
    const userId = auth.currentUser.uid;
    getUserName(userId)
      .then(name => setUserName(name))
      .catch(error =>
        console.error('Помилка отримання імені користувача:', error)
      );
  }, [getUserName]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !content) {
      alert('Please, fill all fields');
      return;
    }

    const newPost = {
      title,
      content,
      author: userName,
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
          <FormLabel>Title</FormLabel>
          <FormInput type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <FormLabel>Post text</FormLabel>
          <FormTextarea value={content} onChange={handleContentChange} />
        </div>
        <FormButton type="submit">Create post</FormButton>
      </form>
    </FormContainer>
  );
};
