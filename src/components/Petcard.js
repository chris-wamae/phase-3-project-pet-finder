
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import Delete from "./Delete";

function PetCard(){
    const pets = useStore(petsStore)
    return(
     pets.petsList.map((pet)=>{
     return (
     <>
     <p key={pet.id}>{pet.title}</p>
     <Delete/>
     </>)
     })
    )
}
export default PetCard;