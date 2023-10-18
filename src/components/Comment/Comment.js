import React from 'react';
import {
  CommentAuthor,
  CommentItem,
  CommentList,
  ReplyButton,
} from './Comment.styled';

export const Comment = ({
  postId,
  postComments,
  replyToChecker,
  setFocusedInput,
}) => {
  const handleReplyClick = comment => {
    const replyTo = comment.author;
    replyToChecker(replyTo);
  };

  return (
    <CommentList>
      {postComments[postId].map(comment => (
        <CommentItem key={comment.id}>
          <CommentAuthor>{comment.author}:</CommentAuthor> {comment.text}
          <ReplyButton type="button" onClick={() => handleReplyClick(comment)}>
            Reply
          </ReplyButton>
        </CommentItem>
      ))}
    </CommentList>
  );
};
