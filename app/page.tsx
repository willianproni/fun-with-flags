import { Card } from "./components";
import { FetchHttpClient } from "@/infra/http/fetch-http-client";
import { RemoteFlagsSearch } from "@/data/usecases/remote-flags-search";
import { flagProps } from "@/domain/model/flags-model";
import Link from "next/link";

const fetchHttpClient = new FetchHttpClient();

const searchFlagsUseCase = new RemoteFlagsSearch(fetchHttpClient);

const fetchCountries = async () => {
  try {
    const response = await searchFlagsUseCase.execute();

    return response;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export default async function Home() {
  const flagsInfo: flagProps[] = await fetchCountries();

  return (
    <>
      {flagsInfo.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {flagsInfo?.map(
            ({ image, capital, country, population, region, acronym }, index) => {
              return (
                <Link key={index} href={{ pathname: `/country/${acronym}` }}>
                  <Card
                    id={index}
                    image={image}
                    country={country}
                    capital={capital}
                    region={region}
                    population={population}
                  />
                </Link>
              );
            }
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="text-3xl">No flags found</span>
        </div>
      )}
    </>
  );
}
