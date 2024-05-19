import { CarCard, CustomButton, CustomFilter, Hero, RecentCar, SearchBar, ShowMore } from "@/Component";
import { HomeProps, CarProps } from "@/Types";
import { fetchCar } from "@/Utils";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCar({
    manufacturer: searchParams.manufacturer || "toyota",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 9,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels}
            />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section id="explore_cars">
            <div className='home__cars-wrapper'>
              {allCars?.map((carDetails: CarProps) => (
                <CarCard carDet={carDetails} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>

      <RecentCar />

    </main>
  );
}
