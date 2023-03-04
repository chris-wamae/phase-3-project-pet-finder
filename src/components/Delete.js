import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Delete({pet}) {
  const pets = useStore(petsStore);
  let other_pets = pets.petsList.filter((thispet)=>{
    return thispet.id !== pet.id
   })
  const handleDelete = () => {
    axios
      .delete(`https://wamae-pet-finder.onrender.com/pets/${pet.id}`)
      .then(() => pets.setPetsStore(other_pets));
  };
  return <button onClick={handleDelete}> Delete</button>;
}

export default Delete;