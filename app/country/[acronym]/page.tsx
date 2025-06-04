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

const fetchHttpClient = new FetchHttpClient();

const flagDetailsSearchUseCase = new RemoteFlagDetailsSearch(fetchHttpClient);

const getFlagDetailsInfo = async (acronym: string) => {
  try {
    const response = flagDetailsSearchUseCase.execute(acronym);

    return response;
  } catch (error) {
    throw error;
  }
};

const CountryScreen = async ({ params }: CountryScreenProps) => {
  const { acronym } = await params;

  const flagDetails = await getFlagDetailsInfo(acronym);

  if (!flagDetails)
    return <div className="flex justify-center">No flag details available</div>;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4">
        <div className="flex items-center md:max-w-[600px]">
          <Image
            src={flagDetails.image || "https://placehold.co/600x400.svg"}
            className="max-h-80 object-cover rounded-lg"
            width={500}
            height={300}
            alt="Image flag"
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

          <div className="flex flex-wrap items-center">
            <span className="font-semibold mr-1">Borders:</span>
            {flagDetails?.border?.length > 0 ? (
              <>
                {flagDetails?.border.map((item, index) => {
                  return <CountryBorderCard key={index} acronym={item} />;
                })}
              </>
            ) : (
              "None"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryScreen;
