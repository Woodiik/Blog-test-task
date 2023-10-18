// Blog.js
import React, { useEffect, useState } from 'react';
import { db } from 'firebaseInit/firebaseInit';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { CreatePostForm } from 'components/CreatePostForm/CreatePostForm';
import { CommentForm } from 'components/CommentForm/CommentForm';
import { Comment } from 'components/Comment/Comment';

import {
  BlogContainer,
  BlogHeader,
  PostList,
  PostItem,
  PostTitle,
  PostAuthor,
  PostContent,
  CommentButton,
} from './Blog.styled';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postComments, setPostComments] = useState({});
  const [visibleComments, setVisibleComments] = useState({});
  const [replyTo, setReplyTo] = useState(null);
  const [, setFocusedInput] = useState(null);

  const fetchPosts = async () => {
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const postsData = [];
    querySnapshot.forEach(doc => {
      postsData.push({ id: doc.id, ...doc.data() });
    });
    setPosts(postsData);
    setLoading(false);
  };
  const onCreatePost = async newPost => {
    try {
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, {
        ...newPost,
        timestamp: new Date(),
      });

      setPosts(prevPosts => [newPost, ...prevPosts]);
    } catch (error) {
      console.error('PostAdd error', error);
    }
  };

  const getUserName = async userId => {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      return userData.name || 'Anonymous';
    } else {
      return 'Anonymous';
    }
  };

  const addCommentToPost = async (postId, commentText, author, replyTo) => {
    try {
      const commentsCollection = collection(db, 'comments');

      const newComment = {
        postId,
        text: commentText,
        author,
        replyTo: replyTo || '',
        timestamp: new Date(),
      };

      setPostComments(prevPostComments => ({
        ...prevPostComments,
        [postId]: [...(prevPostComments[postId] || []), newComment],
      }));
      await addDoc(commentsCollection, newComment);
    } catch (error) {
      console.error('CommentAdd error', error);
    }
  };
  const getCommentsForPost = async postId => {
    const commentsCollection = collection(db, 'comments');
    const q = query(
      commentsCollection,
      where('postId', '==', postId),
      orderBy('timestamp', 'asc')
    );

    const querySnapshot = await getDocs(q);
    const commentsData = [];

    querySnapshot.forEach(doc => {
      commentsData.push({ id: doc.id, ...doc.data() });
    });
    return commentsData;
  };
  const showCommentsForPost = async postId => {
    setVisibleComments(prevVisibleComments => ({
      ...prevVisibleComments,
      [postId]: !prevVisibleComments[postId],
    }));

    const comments = await getCommentsForPost(postId);

    setPostComments(prevPostComments => ({
      ...prevPostComments,
      [postId]: comments,
    }));
  };
  const replyToChecker = replyTo => {
    setReplyTo(replyTo);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BlogContainer>
      <CreatePostForm onCreatePost={onCreatePost} getUserName={getUserName} />
      {loading ? (
        <p>Завантаження постів...</p>
      ) : (
        <PostList>
          {posts.map(post => (
            <PostItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostAuthor>Author: {post.author || 'Anonymous'}</PostAuthor>
              <PostContent>{post.content}</PostContent>
              <CommentButton onClick={() => showCommentsForPost(post.id)}>
                Show Comments
              </CommentButton>
              {visibleComments[post.id] && postComments[post.id] && (
                <Comment
                  postId={post.id}
                  postComments={postComments}
                  replyToChecker={replyToChecker}
                  setFocusedInput={setFocusedInput}
                />
              )}

              <CommentForm
                postId={post.id}
                onAddComment={addCommentToPost}
                getUserName={getUserName}
                replyTo={replyTo}
                setFocusedInput={setFocusedInput}
              />
            </PostItem>
          ))}
        </PostList>
      )}
    </BlogContainer>
  );
};
