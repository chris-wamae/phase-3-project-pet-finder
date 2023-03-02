import PetCard from "../components/Petcard";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import Search from "../components/Search";
import AddPet from "../components/AddPet";

function AllPets(){
    const pets = useStore(petsStore)
    console.log(pets.petsList)
    return (<>
       <Search/>
       <AddPet/>
       {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
       </>
    )
}
export default AllPets;