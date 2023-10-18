import { auth } from 'firebaseInit/firebaseInit';
import React, { useEffect, useState } from 'react';

export const ReplyForm = ({ postId, onAddReply, getUserName }) => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (comment.trim() !== '') {
      console.log(userName);
      onAddReply(postId, comment, userName);
      setComment('');
    }
  };

  useEffect(() => {
    const userId = auth.currentUser.uid;
    getUserName(userId)
      .then(name => setUserName(name))
      .catch(error => console.error('getUserName error', error));
  }, [getUserName]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your reply..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button type="submit">Додати коментар</button>
    </form>
  );
};
