import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

function Home() {
  const [carData, setCarData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      const data = response.data;
      setCarData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex mx-auto">
          <CarCard carData={carData} />
        </div>
        <Footer carData={carData} />
      </div>
    </>
  );
}

export default Home;
