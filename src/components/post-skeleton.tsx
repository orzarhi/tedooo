import { Skeleton } from '@/components/ui/skeleton';

export const PostSkeleton = () => {
  return (
    <div className="max-w-3xl mt-5 mx-auto bg-background rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="size-10 rounded-full" />
          <div>
            <Skeleton className="w-24 h-4 mb-1" />
            <div className="flex items-center gap-2 text-sm">
              <Skeleton className="w-16 h-3" />
              <span>·</span>
              <Skeleton className="w-10 h-3" />
            </div>
          </div>
        </div>

        <Skeleton className="w-full h-4 mb-2" />
        <Skeleton className="w-5/6 h-4 mb-4" />

        <Skeleton className="w-full h-48 mb-4 rounded-lg" />

        <div className="flex justify-between items-center py-2 border-b text-sm">
          <div className="flex items-center gap-2">
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="w-12 h-4" />
          </div>
          <Skeleton className="w-16 h-4" />
        </div>

        <div className="flex gap-2 pt-2">
          <Skeleton className="w-full h-8 rounded-md" />
          <Skeleton className="w-full h-8 rounded-md" />
        </div>
      </div>
    </div>
  );
};
