import { Card } from "./components";
import { FetchHttpClient } from "@/infra/http/fetch-http-client";
import { RemoteFlagsSearch } from "@/data/usecases/remote-flags-search";
import { flagProps } from "@/domain/model/flags-model";

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
    <main className="flex-1">
      {flagsInfo.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {flagsInfo?.map(
            ({ image, capital, country, population, region, id }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  image={image}
                  country={country}
                  capital={capital}
                  region={region}
                  population={population}
                />
              );
            }
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="text-3xl">No flags found</span>
        </div>
      )}
    </main>
  );
}
