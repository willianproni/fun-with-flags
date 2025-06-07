import Link from "next/link";

type CountryBorderCardProps = {
  acronym: string;
};

const CountryBorderCard = (params: CountryBorderCardProps) => {
  const { acronym } = params;
  return (
    <Link
      className="bg-gray-300 py-[1.5px] px-[6px] rounded-md m-1 hover:bg-gray-400"
      href={`/country/${acronym}`}
    >
      {acronym}
    </Link>
  );
};

export default CountryBorderCard;
