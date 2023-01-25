import React from "react";
import Items from "./Items";
import KidsSec from "./KidsSec";
import Loading from "./Loading";
import TopProuduct from "./TopProuduct";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Loading />
      <Welcome />
      <Items />
      <TopProuduct />
      <KidsSec />
    </div>
  );
};

export default Home;
