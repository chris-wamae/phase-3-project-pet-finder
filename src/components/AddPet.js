import { useState } from "react"
import axios from "axios"
import { useStore } from "zustand"
import { petsStore } from "../data/PetsStore"


function AddPet(){
    const pets = useStore(petsStore)
    const [showForm,setShowForm] = useState(false)
    const [newPet, setNewPet] = useState({
    "name":"",
    "breed": "", 
    "image": ""
    })
    //console.log(newPet)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setShowForm(false)
    axios.post(`https://philoxenia.onrender.com/pets/create`,newPet).then((r) =>
    r.status === 201
    ? axios
        .get("https://philoxenia.onrender.com/pets")
        .then((r) => pets.setPetsStore(r.data))
    : console.log(r.status)
);
    }

    if(showForm === false){
        return <button 
        onClick={() => setShowForm(true)
        }>Add new pet</button>
    }else{
        return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pet name" onChange={(e) =>{
        setNewPet({...newPet, "name":e.target.value})
        }}></input>
        <input type="text" placeholder="Pet breed" onChange={(e) =>{
        setNewPet({...newPet, "breed":e.target.value})
        }}></input>
        <input type="url" placeholder="Pet image url" onChange={(e) =>{
        setNewPet({...newPet, "image":e.target.value})
        }}></input>
        <button type="submit">Add</button>
        </form>
    }

}

export default AddPet;