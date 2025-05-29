import { Card } from "./components";
import { CardProps } from "./components/Card";

const countriesData: CardProps[] = [
  {
    image: "https://placehold.co/600x400",
    country: "Brasil",
    capital: "Brasília",
    region: "América do Sul",
    population: "215300000",
  },
  {
    image: "https://placehold.co/600x400",
    country: "Canadá",
    capital: "Ottawa",
    region: "América do Norte",
    population: "38700000",
  },
  {
    image: "https://placehold.co/600x400",
    country: "França",
    capital: "Paris",
    region: "Europa",
    population: "65500000",
  },
  {
    image: "https://placehold.co/600x400",
    country: "Japão",
    capital: "Tóquio",
    region: "Ásia",
    population: "125700000",
  },
  {
    image: "https://placehold.co/600x400",
    country: "Austrália",
    capital: "Camberra",
    region: "Oceania",
    population: "26000000",
  },
  {
    image: "https://placehold.co/600x400",
    country: "Egito",
    capital: "Cairo",
    region: "África",
    population: "109000000",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {countriesData.map((item, index) => {
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
