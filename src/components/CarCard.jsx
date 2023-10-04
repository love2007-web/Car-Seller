import React from "react";

import { People, FuelPump, Speedometer,Heart } from "react-bootstrap-icons";


const CarCard = (props) => {
   const {carData} = props;

  return (
    <>
      <div className="flex flex-wrap w-screen mx-auto">
        {carData.map((car) => (
          <div
            className="w-96 p-2 bg-slate-200 rounded-lg mx-4 shadow-xl h-auto my-3 mx-auto"
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
              <hr className="border border-1 border-slate-300" />
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <span className="text-xl font-medium">${car.price}</span>
                    /month
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <button className="bg-indigo-200 mr-3 rounded-md p-2">
                    <Heart
                      color="royalblue"
                      className="text-xl font-semibold"
                    />
                  </button>
                  <button className="bg-blue-600 text-white font-medium rounded-md p-2">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCard;
