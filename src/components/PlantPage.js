import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([])
  const [search, setSearch]= useState('')
  
  console.log(search)
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(plants=> setPlants(plants))
  }, [])

  function addNewPlant(newPlant){
    setPlants(plants=>[...plants, newPlant])
  }

  function searchPlants(){
    const searched=plants.filter(plant=>{
      if(plant.name.toLowerCase().includes(search.toLowerCase())){
        return plant
      }else if (search===''){
        return plant
      }
    })
    return searched
  }


  return (
    <main>
      <NewPlantForm  addNewPlant={addNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={searchPlants()}/>
    </main>
  );
}

export default PlantPage;
