import Image from "next/image";
import Section from "../components/Section";
import CountryBorderCard from "../components/CountryBorderCards";

type CountryScreenProps = {
  params: Promise<{
    acronym: string;
  }>;
};

const border = [
  "ARG",
  "BOL",
  "COL",
  "GUF",
  "GUY",
  "PRY",
  "PER",
  "SUR",
  "URY",
  "VEN",
];

const CountryScreen = async ({ params }: CountryScreenProps) => {
  const { acronym } = await params;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div className="w-full">
          <Image
            className="w-full h-full"
            src={"https://placehold.co/600x400.svg"}
            width={500}
            height={300}
            alt="Image flag"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-6">
          <h2 className="text-3xl font-bold mb-1">Brazil ({acronym})</h2>

          <h3 className="text-xl mb-6">South America</h3>

          <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[600px] space-y-2 gap-4 mb-4">
            <Section title="Capital" value="Brasília" icon="/map-pin.svg" />
            <Section title="Language" value="Português" icon="/languages.svg" />
            <Section
              title="Population"
              value="214 million"
              icon="/population.svg"
            />
          </div>

          <div className="flex gap-2">
            {border.map((item, index) => {
              return <CountryBorderCard key={index} acronym={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryScreen;
