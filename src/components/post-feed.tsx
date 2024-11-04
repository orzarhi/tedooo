import { getPosts } from '@/api/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostItem } from './post-item';
import { PostSkeleton } from './post-skeleton';

export const PostFeed = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 0 }) => getPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.hasMore ? allPages.length : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="space-y-5">
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  }

  if (isError) return <div>Error loading posts.</div>;

  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page?.data.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ))}
      <p ref={ref} className="my-2">
        <Loader className="animate-spin size-8 mx-auto" />
      </p>
    </>
  );
};
