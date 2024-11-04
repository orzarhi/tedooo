import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Post } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import { PostCarousel } from './post-carousel';

interface PostProps {
  post: Post;
}

export const PostList = ({ post }: PostProps) => {
  return (
    <div className="max-w-3xl mt-5 mx-auto bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={post.avatar ?? ''}
            alt={`${post.username}'s profile picture`}
            className="rounded-full"
            width={40}
            height={40}
          />
          <div>
            <h2 className="font-semibold">{post.username}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="#" className="text-primary hover:underline">
                {post.shopName}
              </a>
              <span>·</span>
              <span>
                {formatDistanceToNow(new Date(post.date), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm">{post.text}</p>

        {!post.images.length && (
          <div className="text-center">
            <p>No images available</p>
          </div>
        )}

        {post.images.length > 1 ? (
          <PostCarousel post={post} />
        ) : (
          <div className="relative aspect-[16/9] mb-4">
            <img
              src={post.images[0]}
              alt="Post image"
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-between items-center py-2 border-b text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="bg-[#07B4AF] rounded-full p-1">
              <ThumbsUp className="w-3 h-3 text-primary-foreground" />
            </div>
            <span>{post.likes} Likes</span>
          </div>
          <div>
            <span>{post.comments} Comments</span>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button
            variant="ghost"
            className={cn('flex-1', {
              'text-blue-500': post.didLike,
            })}
          >
            <ThumbsUp className="size-4 mr-2" />
            Like
          </Button>
          <Button variant="ghost" className="flex-1">
            <MessageSquare className="size-4 mr-2" />
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};
