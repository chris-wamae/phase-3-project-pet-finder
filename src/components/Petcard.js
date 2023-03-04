
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import Delete from "./Delete";

function PetCard({pet}){
    const pets = useStore(petsStore)
     return (
     <>
     <p key={pet.id}>{pet.name}</p>
     <img src={pet.image_url}/>
     </>)
}
export default PetCard;