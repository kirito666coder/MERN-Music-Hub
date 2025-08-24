
const LoadingSkeletionforTrandingNewHitsSectioninHomepage = () => {
  return (
    <div className="relative mx-3 mt-6 flex h-52 overflow-hidden rounded-3xl bg-gradient-to-br  shadow-lg ">
    
    {/* Background Blur Skeleton */}
    <div className="absolute inset-0">
      <div className="h-full w-full bg-gray-700/40 rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded-3xl" />
    </div>

    {/* Content Skeleton */}
    <div className="relative z-10 flex w-full flex-col justify-between px-8 py-6 text-white">
      <div className="space-y-2">
        <div className="h-3 w-32 bg-gray-500/30 rounded-md" /> {/* Trending New Hit */}
        <div className="h-6 w-64 bg-gray-500/30 rounded-md" /> {/* Song Title */}
        <div className="h-4 w-48 bg-gray-500/30 rounded-md" /> {/* Artist */}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="h-10 w-36 bg-gray-500/30 rounded-full" /> {/* Button Skeleton */}
        <div className="h-4 w-24 bg-gray-500/30 rounded-md" /> {/* Plays Count Skeleton */}
      </div>
    </div>

    {/* Right-side cover skeleton */}
    <div className="relative hidden h-full w-44 md:flex">
      <div className="h-full w-full bg-gray-600/40 rounded-l-xl" />
      <div className="absolute inset-0 rounded-l-xl bg-gradient-to-l from-black/30 to-transparent" />
    </div>
  </div>
  );
}

export default LoadingSkeletionforTrandingNewHitsSectioninHomepage
