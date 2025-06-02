type CountryScreenProps = {
  params: {
    id: string;
  };
};

const CountryScreen = async ({ params }: CountryScreenProps) => {
  const { id } = await params;

  return <h1>Country details: {id}</h1>;
};

export default CountryScreen;
