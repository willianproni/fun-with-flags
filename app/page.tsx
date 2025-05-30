"use client";

import { useEffect, useState } from "react";
import { Card } from "./components";
import { flagProps } from "./components/Card";
import { FetchHttpClient } from "@/infra/http/fetch-http-client";
import { RemoteFlagsSearch } from "@/data/usecases/remote-flags-search";

export default function Home() {
  const [countriesList, setCountriesList] = useState<flagProps[]>([]);

  const fetchHttpClient = new FetchHttpClient();

  const seacrhFlagsUseCase = new RemoteFlagsSearch(fetchHttpClient);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await seacrhFlagsUseCase.execute();

      setCountriesList(response);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <main className="flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {countriesList.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                country={item.country}
                capital={item.capital}
                region={item.region}
                population={item.population}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
