
const LoadingSkeletionforAllsongsectioninHomepage = () => {
  return (
    <div className="mx-4 my-2">
      {/* Section Title Skeleton */}
      <div className="h-8 w-40 bg-gray-500/30 rounded-md mb-4 " />

      {/* Grid of Song Card Skeletons */}
      <div className="grid md:grid-cols-2 gap-2 md:gap-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative flex items-center bg-gradient-to-br from-gray-700/40 to-gray-800/40 dark:from-gray-600/40 dark:to-gray-700/40 rounded-xl p-3 shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center gap-2 w-full">
              {/* Cover image skeleton */}
              <div className="h-15 w-15 bg-gray-500/30 rounded-xl" />

              {/* Text skeleton */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-4 w-3/4 bg-gray-500/30 rounded-md" /> {/* Song title */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-20 bg-gray-500/30 rounded-md" /> {/* Artist */}
                  <div className="h-3 w-12 bg-gray-500/30 rounded-md" /> {/* Plays */}
                  <div className="h-3 w-6 bg-gray-500/30 rounded-full" /> {/* Like button */}
                </div>
              </div>

              {/* Play button skeleton */}
              <div className="absolute right-3 bottom-3 h-8 w-8 bg-gray-500/30 rounded-full opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeletionforAllsongsectioninHomepage
