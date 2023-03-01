import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const myPets = useStore(petsStore);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/pictures").then((r) => setPets(r.data));
  }, []);
  useEffect(() => {
    myPets.setPetsStore(pets);
  }, [pets]);
  console.log(myPets);
  return <></>;
}

export default Home;