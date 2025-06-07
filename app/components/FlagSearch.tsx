"use client";

import { flagProps } from "@/domain/model/flags-model";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";
import { Search } from "./Search";
import { Select } from "./Select";

interface FlagSearchProps {
  flags: flagProps[];
}

export const FlagSearch = ({ flags }: FlagSearchProps) => {
  const [searchFlags, setSearchFlags] = useState<string>("");
  const [selectRegion, setSelectRegion] = useState<string>("All regions");

  const filterFlags = flags.filter(({ country, region }) => {
    const flagsMathSearchFilter = country
      .toLocaleLowerCase()
      .includes(searchFlags.toLocaleLowerCase());

    const regionMatchs =
      selectRegion === "All regions" || selectRegion === region;

    return flagsMathSearchFilter && regionMatchs;
  });

  const countCountries = filterFlags.length;

  const regions: string[] = [
    "All regions",
    ...Array.from(new Set(flags.map((flag) => flag.region))).sort(),
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-4 w-full mb-4">
        <div className="w-full">
          <Search set={setSearchFlags} />

          <span className="text-gray-600 pl-2">
            Showing {countCountries}{" "}
            {countCountries === 1 ? "Country" : "Countries"}
          </span>
        </div>

        <Select options={regions} value={selectRegion} set={setSelectRegion} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filterFlags?.map(
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
    </>
  );
};
