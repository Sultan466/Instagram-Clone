// src/components/Feed.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import NewPostForm from '../NewPostForm';
import { RootState } from '../store';

interface FeedProps {
  showNewPostForm: boolean;
  onCloseNewPostForm: () => void;
}

const Feed: React.FC<FeedProps> = ({ showNewPostForm, onCloseNewPostForm }) => {
  const posts = useSelector((state: RootState) => state.post.posts);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {showNewPostForm && <NewPostForm onClose={onCloseNewPostForm} />}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
