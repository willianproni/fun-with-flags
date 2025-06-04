import { flagProps, flagsSearchResponse } from "../model/flags-model";

export const mockFlagsSearch = (): flagProps[] => [
  {
    acronym: "MNG",
    capital: "Ulan Bator",
    country: "Mongolia",
    image: "https://flagcdn.com/w320/mn.png",
    population: "3278292",
    region: "Asia",
  },
  {
    acronym: "SWE",
    capital: "Stockholm",
    country: "Sweden",
    image: "https://flagcdn.com/w320/se.png",
    population: "10353442",
    region: "Europe",
  },
];

export const makeMockHttpResponse = (): flagsSearchResponse[] => [
    {
      flags: {
        png: "https://flagcdn.com/w320/mn.png",
        svg: "https://flagcdn.com/mn.svg",
        alt: "The flag of Mongolia is composed of three equal vertical bands of red, blue and red, with the national emblem — the Soyombo — in gold centered in the hoist-side red band.",
      },
      cca3: "MNG",
      name: {
        common: "Mongolia",
        official: "Mongolia",
        nativeName: {
          mon: {
            official: "Монгол улс",
            common: "Монгол улс",
          },
        },
      },
      capital: ["Ulan Bator"],
      region: "Asia",
      population: 3278292,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/se.png",
        svg: "https://flagcdn.com/se.svg",
        alt: "The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
      },
      cca3: "SWE",
      name: {
        common: "Sweden",
        official: "Kingdom of Sweden",
        nativeName: {
          swe: {
            official: "Konungariket Sverige",
            common: "Sverige",
          },
        },
      },
      capital: ["Stockholm"],
      region: "Europe",
      population: 10353442,
    },
  ];