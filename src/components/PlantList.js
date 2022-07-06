import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const renderplants= plants.map(plant=><PlantCard key={plant.id} plant={plant}/>)
  return (
    <ul className="cards">{renderplants}</ul>
  );
}

export default PlantList;
