import { RemoteFlagsSearch } from "@/data/usecases/remote-flags-search";
import { flagProps } from "@/domain/model/flags-model";
import { FetchHttpClient } from "@/infra/http/fetch-http-client";
import { FlagSearch } from "./components/FlagSearch";

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
  const flagsInfo: flagProps[] = (await fetchCountries()) ?? [];

  if (flagsInfo.length === 0) {
    return (
      <div className="flex justify-center">
        <span className="text-3xl">No flags found</span>
      </div>
    );
  }

  return (
    <>
      <FlagSearch flags={flagsInfo ?? []} />
    </>
  );
}
