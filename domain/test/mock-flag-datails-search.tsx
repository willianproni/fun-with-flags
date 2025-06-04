import { flagDetailsProps, flagDetailsResponse } from "../model/flags-model";

export const makeMockRemoteFlagDetailsSearchHttpResponse =
  (): flagDetailsResponse => ({
    flags: {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg",
      alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
    },
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
      nativeName: {
        por: {
          official: "República Federativa do Brasil",
          common: "Brasil",
        },
      },
    },
    capital: ["Brasília"],
    region: "Americas",
    languages: {
      por: "Portuguese",
    },
    borders: [
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
    ],
    population: 212559409,
  });

export const makeResponseUseCaseRemoteFlagDetailsSearch =
  (): flagDetailsProps => ({
    border: [
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
    ],
    capital: "Brasília",
    country: "Brazil",
    image: "https://flagcdn.com/br.svg",
    language: "Portuguese",
    population: "212559409",
    region: "Americas",
  });
