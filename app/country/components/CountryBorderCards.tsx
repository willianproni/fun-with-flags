import Link from "next/link";

type CountryBorderCardProps = {
  acronym: string;
};

const CountryBorderCard = (params: CountryBorderCardProps) => {
  const { acronym } = params;
  return <Link className="bg-gray-300 p-1 rounded-md" href={`/country/${acronym}`}>{acronym}</Link>;
};

export default CountryBorderCard;
