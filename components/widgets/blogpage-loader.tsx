import { Skeleton } from "../ui/skeleton";

export default function BlogLoadingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Blog Header */}
      <div className="mb-8">
        {/* Category/Tag */}
        <Skeleton className="h-5 w-24 mb-4" />

        {/* Title */}
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-3/4 mb-6" />

        {/* Author and Date Info */}
        <div className="flex items-center gap-4 mb-8">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <Skeleton className="h-96 w-full rounded-lg mb-8" />

      {/* Blog Content */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Paragraph 2 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Subheading */}
        <Skeleton className="h-8 w-2/3 mt-8 mb-4" />

        {/* Paragraph 3 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-gray-200 pl-4 my-8">
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-5/6" />
        </div>

        {/* Paragraph 4 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Subheading */}
        <Skeleton className="h-8 w-1/2 mt-8 mb-4" />

        {/* Paragraph 5 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex gap-2 mt-12 mb-8">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-8 w-20" />
      </div>

      {/* Author Bio */}
      <div className="border-t border-gray-200 pt-8 mt-8">
        <div className="flex gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
