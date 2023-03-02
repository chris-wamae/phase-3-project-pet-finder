import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function AllPets(){
    const pets = useStore(petsStore)
    console.log(pets.petsList)
    return (
       pets.petsList.map((pet)=>{
     return <p>{pet.name}</p>
       })
    )
}
export default AllPets;