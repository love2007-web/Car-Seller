import React from "react";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex mx-auto">
          <CarCard />
        </div>
      </div>
    </>
  );
};

export default Home;
