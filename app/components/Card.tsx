import { flagProps } from "@/domain/model/flags-model";
import Image from "next/image";

export const Card = ({
  id,
  image,
  country,
  capital,
  region,
  population,
}: flagProps) => {
  return (
    <div className="h-full bg-white overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-video w-full">
        <Image
          className="object-cover"
          src={image}
          width={500}
          height={300}
          alt="Image flag"
          priority={id < 12}
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
