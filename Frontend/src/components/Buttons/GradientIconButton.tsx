const GradientIconButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="cursor-pointer w-13 h-13 flex items-center justify-center rounded-full border-2 border-white 
                 bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:brightness-110 transition-all duration-300"
    >
      {children}
    </button>
  );
  