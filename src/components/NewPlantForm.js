import React, { useState } from "react";
import PlantList from "./PlantList";

function NewPlantForm({addNewPlant}) {
  const [name, setName]=useState('')
  const [image, setImage]=useState('')
  const [price , setPrice]=useState('')

  function handleImageChange(e){
    setImage(e.target.value)
  }
  function handleNameChange(e){
    setName(e.target.value)
  }
  function handlePriceChange(e){
    setPrice(e.target.value)
  }
  
  function handleSubmit(e){
    
    e.preventDefault()
    e.target.reset()
    const newPlant={name,image,price}
    addNewPlant(newPlant)
  }

 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
