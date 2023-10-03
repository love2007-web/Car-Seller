import React from "react";
import { useEffect, useState } from "react";
import { People, FuelPump, Speedometer } from "react-bootstrap-icons";
import axios from "axios";

const CarCard = () => {
  const [carData, setcarData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      console.log(response);
      const data = response.data;
      console.log(data);
      setcarData(data);

      // Handle the data as needed (e.g., update state or display it in your component)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <>
      <div className="flex flex-wrap w-screen">
        {carData.map((car) => (
          <div
            className="w-96 p-2 bg-slate-200 rounded-lg mx-4 shadow-xl h-auto my-5"
            key={car.id}
          >
            <div className="w-full h-64">
              <img
                src={car.image}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="px-2 mt-2">
              <div className="flex justify-between items-center">
                <h2 className="text-base font-medium">
                  {car.make} {car.model}
                </h2>
                <p className="border-dashed border-2 border-sky-500 rounded-full px-3">
                  {car.year}
                </p>
              </div>
              <div className="flex flex-wrap py-3">
                <div className="flex w-40 mr-3">
                  <People size={22} color="royalblue" />
                  &nbsp;
                  <p>{car.capacity} People</p>
                </div>
                <div className="flex w-40 mr-3">
                  <FuelPump size={22} color="royalblue" />
                  &nbsp;
                  <p>{car.fuelType} </p>
                </div>
                <div className="flex w-40 mt-2 mr-3">
                  <Speedometer size={22} color="royalblue" />
                  &nbsp;
                  <p>{car.range} </p>
                </div>
                <div className="flex w-40 mt-2 mr-3">
                  <Speedometer size={22} color="royalblue" />
                  &nbsp;
                  <p>{car.transmission} </p>
                </div>
              </div>
              <hr/>
              <div>
                <p>Price: ${car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCard;
