import Image from "next/image";

type flagCardProps = {
  id: number;
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};

export const Card = ({
  id,
  image,
  country,
  capital,
  region,
  population,
}: flagCardProps) => {
  return (
    <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
      <div className="aspect-video w-full">
        <Image
          className="w-full h-full object-cover"
          src={image || "https://placehold.co/600x400.svg"}
          width={500}
          height={300}
          alt={`Flag of ${country}`}
          priority={id < 12}
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-4">{country}</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Capital:</span>
            <span> {capital}</span>
          </div>
          <div>
            <span className="font-semibold">Regions:</span>
            <span> {region}</span>
          </div>
          <div>
            <span className="font-semibold">Population:</span>
            <span> {population}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
