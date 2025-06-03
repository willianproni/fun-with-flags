import Image from "next/image";
import Section from "../components/Section";
import CountryBorderCard from "../components/CountryBorderCards";
import { RemoteFlagDetailsSearch } from "@/data/usecases/remote-flag-details-search";
import { FetchHttpClient } from "@/infra/http/fetch-http-client";

type CountryScreenProps = {
  params: Promise<{
    acronym: string;
  }>;
};

const CountryScreen = async ({ params }: CountryScreenProps) => {
  const { acronym } = await params;

  const fetchHttpClient = new FetchHttpClient();

  const flagDetailsSearchUseCase = new RemoteFlagDetailsSearch(fetchHttpClient);

  const getFlagDetailsInfo = (acronym: string) => {
    try {
      const response = flagDetailsSearchUseCase.execute(acronym);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const flagDetails = await getFlagDetailsInfo(acronym);

  if (!flagDetails)
    return <div className="flex justify-center">No flag details available</div>;

  return (
    <>
      <div className="grid items-center grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div className="w-full">
          <Image
            src={flagDetails.image || "https://placehold.co/600x400.svg"}
            width={500}
            height={300}
            alt="Image flag"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-6">
          <h2 className="text-3xl font-bold mb-1">
            {flagDetails.country} ({acronym})
          </h2>

          <h3 className="text-xl mb-6">{flagDetails.region}</h3>

          <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[600px] space-y-2 gap-4 mb-4">
            <Section
              title="Capital"
              value={flagDetails.capital}
              icon="/map-pin.svg"
            />
            <Section
              title="Language"
              value={flagDetails.language}
              icon="/languages.svg"
            />
            <Section
              title="Population"
              value={flagDetails.population}
              icon="/population.svg"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Borders:</span>
            {flagDetails?.border.map((item, index) => {
              return <CountryBorderCard key={index} acronym={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryScreen;
