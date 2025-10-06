import React from "react";
import Landing from "./landing";
import Map from "./map-container";

const Home = () => {
  return (
    <>
      <Landing />
      <div className="relative h-[80vh] w-screen">
        <Map />
      </div>
    </>
  );
};

export default Home;
