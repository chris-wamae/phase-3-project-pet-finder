import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import PetCard from "../components/Petcard";
import Delete from "../components/Delete";
import Edit from "../components/Edit";
import Search from "../components/Search";
import axios from "axios";
import { useState,useEffect } from "react";
import AddPet from "../components/AddPet";
import { Link } from "react-router-dom";

function Mypets(){
const myPets = useStore(petsStore);
return(
    <>
<Link exact to="/allpets"><p>View all pets</p></Link>
<Link exact to="/"><p>Logout</p></Link>
<AddPet user_id={myPets.petsList[0].user_id}/>
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