import PetCard from "../components/Petcard";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import Search from "../components/Search";
import AddPet from "../components/AddPet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AllPets(){
    const pets = useStore(petsStore)
    const [myPets, setMyPets] = useState([]);
useEffect(() => {
//this will be the fetch to a specific users pets
axios.get("https://wamae-pet-finder.onrender.com/pets").then((r) => setMyPets(r.data));
    }, []);
    useEffect(() => {
      pets.setPetsStore(myPets);
    }, [myPets]); 
    return (<>
      {/* //<Link exact to="/mypets"><p>View my pets</p></Link> */}
      <Link exact to="/"><p>Home</p></Link>
       <Search/>
       {/* <AddPet/> */}
       {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
       </>
    )
}
export default AllPets;