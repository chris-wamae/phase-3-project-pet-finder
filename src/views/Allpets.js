import PetCard from "../components/Petcard";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import Search from "../components/Search";
import AddPet from "../components/AddPet";
import { Link } from "react-router-dom";
function AllPets(){
    const pets = useStore(petsStore)
    console.log(pets.petsList)
    return (<>
      <Link exact to="/mypets"><p>View my pets</p></Link>
      <Link exact to="/"><p>Logout</p></Link>
       <Search/>
       <AddPet/>
       {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
       </>
    )
}
export default AllPets;