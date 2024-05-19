import { CarProps, FilterProps } from "@/Types";

export async function fetchCar(Properties: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = Properties;

  const headers = {
    "X-RapidAPI-Key": "6ea64d318cmsh6d2f2c4aefc291dp1686c6jsn3c8848a7d213",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );
  const result = response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function generateCarURL(car: CarProps, angle?: any) {}

export const updatedSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { year, make, model } = car;

  url.searchParams.append("customer", "afcarrentel");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const carNav = [
  {
    id: 1,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2016",
    price: "201,000",
  },
  {
    id: 2,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2020",
    price: "501,000",
  },
  {
    id: 3,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2019",
    price: "258,000",
  },
  {
    id: 4,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
  {
    id: 5,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
  {
    id: 6,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
  {
    id: 7,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2016",
    price: "201,000",
  },
  {
    id: 8,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2020",
    price: "501,000",
  },
  {
    id: 9,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2019",
    price: "258,000",
  },
  {
    id: 10,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
  {
    id: 11,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
  {
    id: 12,
    Image: "/hero.png",
    vehName: "Hyundai Elantra",
    year: "2023",
    price: "158,000",
  },
];
