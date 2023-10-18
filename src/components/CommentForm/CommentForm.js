import { auth } from 'firebaseInit/firebaseInit';
import React, { useEffect, useRef, useState } from 'react';
import {
  CommentButton,
  CommentFormWrapper,
  CommentInput,
} from './CommentFormStyled';

export const CommentForm = ({ postId, onAddComment, getUserName, replyTo }) => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const inputRef = useRef(null);
  const replyToRef = useRef(replyTo);

  useEffect(() => {
    const userId = auth.currentUser.uid;
    getUserName(userId)
      .then(name => setUserName(name))
      .catch(error => console.error('userName error', error));
  }, [getUserName]);

  useEffect(() => {
    if (replyToRef.current !== replyTo) {
      inputRef.current.value = `@${replyTo}, ${comment}`;
      replyToRef.current = replyTo;
    }
  }, [replyTo, comment]);

  const handleSubmit = async e => {
    e.preventDefault();
    const finalComment = inputRef.current.value;
    if (finalComment.trim() !== '') {
      onAddComment(postId, finalComment, userName, replyToRef.current);
      setComment('');
      inputRef.current.value = '';
    }
  };

  return (
    <CommentFormWrapper onSubmit={handleSubmit}>
      <CommentInput
        type="text"
        placeholder="Your comment..."
        onChange={e => setComment(e.target.value)}
        ref={inputRef}
      />
      <CommentButton type="submit">Add comment</CommentButton>
    </CommentFormWrapper>
  );
};
