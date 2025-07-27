// components/GenresCard.tsx
type Genre = {
  name: string;
  image: string;
};

const GenresCard = ({ genre }: { genre: Genre }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center rounded-2xl h-64 md:h-65 w-[99%] bg-gradient-to-tr from-[#131313] via-[#2b2a2a] to-[#474747]">
      <h3 className="text-2xl font-bold m-3">{genre?.name}</h3>
      <img src={genre?.image} alt={genre?.name} className="w-[90%] rounded-2xl" />
    </div>
  );
};

export default GenresCard;
