
const LoadingPageForLikeSongs = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        {[...Array(6)].map((_, i) => (
           <div key={i} className="relative flex items-center bg-gray-700/40 dark:bg-gray-600/40 rounded-xl p-3 shadow-lg overflow-hidden">
           <div className="w-16 h-16 bg-gray-500/30 rounded-xl mr-3" />
           <div className="flex-1 flex flex-col gap-2">
             <div className="h-4 w-3/4 bg-gray-500/30 rounded-md" /> 
             <div className="flex gap-2">
               <div className="h-3 w-20 bg-gray-500/30 rounded-md" /> 
               <div className="h-3 w-12 bg-gray-500/30 rounded-md" /> 
               <div className="h-3 w-6 bg-gray-500/30 rounded-full" /> 
             </div>
           </div>
           <div className="h-8 w-8 bg-gray-500/30 rounded-full absolute right-3 bottom-3" /> 
         </div>
        ))}
      </div>
  )
}

export default LoadingPageForLikeSongs
