


export const renderLabel = (label: string, isRequired?: boolean) => (
    <label className="block font-semibold mb-1">
      {label}
      {isRequired && (
        <span className="ml-1 bg-gradient-to-br from-[#f43f5e] to-[#0062ff] text-transparent bg-clip-text font-bold">
          *
        </span>
      )}
    </label>
  );