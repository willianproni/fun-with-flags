type LanguageDetails = {
  official: string;
  common: string;
};

export type searchFlagsResponse = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
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

export type flagProps = {
  id: number;
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};
