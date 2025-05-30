
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
      mon: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
};

export type flagProps = {
  image: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};
