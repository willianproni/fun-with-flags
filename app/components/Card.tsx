import Image from "next/image";

export type CardProps = {
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};

export const Card = ({
  image,
  country,
  capital,
  region,
  population,
}: CardProps) => {
  return (
    <div className="h-full bg-white overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-video w-full">
        <Image
          priority
          className="object-cover"
          src={image}
          width={600}
          height={400}
          alt="Image flag"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">{country}</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Capital:</span>
            <span>{capital}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Regions:</span>
            <span>{region}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Population:</span>
            <span>{population}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
