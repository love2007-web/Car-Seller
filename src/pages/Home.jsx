import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

function Home() {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  useEffect(() => {
    // Calculate currentData whenever currentPage or carData changes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = carData.slice(startIndex, endIndex);

    // Update the state with the current data
    setCurrentData(currentData);
  }, [currentPage, carData]);

  // State to hold the data to be displayed in CarCard
  const [currentData, setCurrentData] = useState([]);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex mx-auto">
          <CarCard carData={currentData} />
        </div>
        <Footer
          carData={carData}
          currentPage={currentPage}
          totalPages={Math.ceil(carData.length / pageSize)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Home;
