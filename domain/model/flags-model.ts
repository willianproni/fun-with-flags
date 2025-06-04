type LanguageDetails = {
  official: string;
  common: string;
};

export type flagsSearchResponse = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: LanguageDetails;
    };
  };
  capital: string[];
  region: string;
  population: number;
};

export type flagDetailsResponse = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      por: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  languages: {
    [languageCode: string]: string;
  };
  population: number;
  borders: string[];
};

export type flagProps = {
  acronym: string;
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};

export type flagDetailsProps = {
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
  language: string;
  border: string[];
};
