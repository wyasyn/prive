import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectLoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Project Header */}
      <div className="mb-12">
        {/* Back button */}
        <Skeleton className="h-9 w-24 mb-6" />

        {/* Project Title */}
        <Skeleton className="h-14 w-full mb-4" />
        <Skeleton className="h-14 w-2/3 mb-6" />

        {/* Project Tagline/Subtitle */}
        <Skeleton className="h-6 w-full mb-3" />
        <Skeleton className="h-6 w-4/5 mb-8" />

        {/* Project Meta Info */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Skeleton className="h-11 w-36" />
          <Skeleton className="h-11 w-36" />
        </div>
      </div>

      {/* Hero Image/Gallery */}
      <Skeleton className="h-125 w-full rounded-xl mb-12" />

      {/* Project Overview Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-48 mb-6" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>

      {/* Tools & Technologies Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-64 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg"
            >
              <Skeleton className="h-12 w-12 rounded" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-44 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-6 w-6 rounded mb-4" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-56 mb-6" />

        {/* Subsection 1 */}
        <div className="mb-8">
          <Skeleton className="h-7 w-1/2 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>

        {/* Subsection 2 */}
        <div className="mb-8">
          <Skeleton className="h-7 w-2/5 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        {/* Image/Screenshot */}
        <Skeleton className="h-80 w-full rounded-lg mb-8" />

        {/* Subsection 3 */}
        <div>
          <Skeleton className="h-7 w-1/3 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-72 mb-6" />
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border-l-4 border-gray-200 pl-6">
              <Skeleton className="h-6 w-48 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results/Impact Section */}
      <div className="mb-12">
        <Skeleton className="h-9 w-52 mb-6" />
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-lg">
              <Skeleton className="h-12 w-24 mx-auto mb-3" />
              <Skeleton className="h-5 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-12">
        <Skeleton className="h-9 w-36 mb-6" />
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </div>

      {/* Related Projects */}
      <div className="border-t pt-12">
        <Skeleton className="h-9 w-56 mb-8" />
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
