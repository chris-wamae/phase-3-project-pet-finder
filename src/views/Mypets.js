import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import PetCard from "../components/Petcard";
import Delete from "../components/Delete";
import Edit from "../components/Edit";
import Search from "../components/Search";
import axios from "axios";
import { useState,useEffect } from "react";
import AddPet from "../components/AddPet";

function Mypets(){
const myPets = useStore(petsStore);
const [pets, setPets] = useState([]);
useEffect(() => {
//this will be the fetch to a specific users pets
axios.get("https://philoxenia.onrender.com/pets").then((r) => setPets(r.data));
    }, []);
    useEffect(() => {
      myPets.setPetsStore(pets);
    }, [pets]);

return(
    <>
<Search/>
<AddPet/>
{
myPets.petsList.map((pet)=>{
return <>
    <PetCard pet={pet}/>
    <Delete pet={pet}/>
    <Edit pet={pet}/>
    </>
})
}
    </>
)


}

export default Mypets