const LoadingPageforArtistpage = () => {
    return (
      <div className="p-6 space-y-12 ">
        {/* Artist Header Skeleton */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <div className="w-40 h-40 rounded-full bg-muted" />
          <div className="flex flex-col gap-3 text-center sm:text-left w-full max-w-sm">
            <div className="h-6 bg-muted rounded w-1/2 mx-auto sm:mx-0" />
            <div className="h-4 bg-muted rounded w-3/4 mx-auto sm:mx-0" />
            <div className="flex gap-6 justify-center sm:justify-start">
              <div className="h-4 bg-muted rounded w-16" />
              <div className="h-4 bg-muted rounded w-16" />
            </div>
            <div className="h-10 w-32 bg-muted rounded-lg mx-auto sm:mx-0" />
          </div>
        </div>
  
        {/* Songs Section Skeleton */}
        <section>
          <div className="h-6 bg-muted rounded w-32 mb-6" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-2xl shadow-sm bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-muted rounded-md" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-32" />
                    <div className="h-3 bg-muted rounded w-20" />
                  </div>
                </div>
                <div className="w-10 h-10 bg-muted rounded-full" />
              </div>
            ))}
          </div>
        </section>
  
        {/* Albums Section Skeleton */}
        <section>
          <div className="h-6 bg-muted rounded w-32 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border shadow-sm bg-card"
              >
                <div className="w-full h-48 bg-muted" />
                <div className="p-4">
                  <div className="h-4 bg-muted rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
  
  export default LoadingPageforArtistpage
  