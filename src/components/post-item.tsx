import { Post } from '@/types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostList } from './post-list';
import { logImpression } from '@/api/post';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      logImpression(post.id);
    }
  }, [inView, post.id]);

  return (
    <div ref={ref}>
      <PostList post={post} />
    </div>
  );
};
