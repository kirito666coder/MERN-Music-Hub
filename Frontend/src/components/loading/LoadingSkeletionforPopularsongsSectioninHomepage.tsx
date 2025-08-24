
const LoadingSkeletionforPopularsongsSectioninHomepage = () => {
  return (
    <div className="mt-8">
   {/* Section header skeleton */}
   <div className="flex justify-between items-center mx-6 mb-4">
     <div className="h-6 w-40 bg-gray-500/30 rounded-md " />
   </div>
 
   {/* Song grid skeleton */}
   <div className="mx-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
     {[...Array(6)].map((_, i) => (
       <div
         key={i}
         className="group relative rounded-2xl overflow-hidden backdrop-blur-md shadow-md bg-gradient-to-br from-gray-700/20 to-black-800/20 cursor-pointer"
       >
         {/* Cover skeleton */}
         <div className="relative w-full h-48 bg-gray-600/30 rounded-md overflow-hidden" />
 
         {/* Overlay circle (simulating play button) */}
         <div className="absolute bottom-3 right-3 w-10 h-10 bg-gray-500/30 rounded-full" />
 
         {/* Song info skeleton */}
         <div className="p-3 space-y-2">
           <div className="h-4 w-3/4 bg-gray-500/30 rounded-md" />
           <div className="h-3 w-1/2 bg-gray-500/30 rounded-md" />
         </div>
       </div>
     ))}
   </div>
 </div>)
}

export default LoadingSkeletionforPopularsongsSectioninHomepage
