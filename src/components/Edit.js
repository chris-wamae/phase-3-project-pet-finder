import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import { useState } from "react";
import axios from "axios";

function Edit({pet}){
const pets = useStore(petsStore)
const [showForm,setShowForm] = useState(false)
const [editPet, setEditPet] = useState({
"name" : "",
"breed" : "",
"image_url" : ""
})
console.log(editPet)
const handleSubmit = (e)  =>{
e.preventDefault()
setShowForm(false)
axios
.patch(`http://localhost:3000/pictures/21`,editPet)
.then((r) =>
//   r.status === 200
//     ? axios
//         .get("https://philoxenia.onrender.com/pets")
//         .then((r) => pets.setPetsStore(r.data))
//     : 
console.log(r.status)
);
}
if(showForm === false){
    return <button 
    onClick={() => setShowForm(true)
    }>Update pet</button>
}else{
    return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Pet name" onChange={(e) =>{
    setEditPet({...editPet, "name":e.target.value})
    }}></input>
    <input type="text" placeholder="Pet breed" onChange={(e) =>{
    setEditPet({...editPet, "breed" : e.target.value})
    }}></input>
    <input type="url" placeholder="Pet image url" onChange={(e) =>{
    setEditPet({...editPet, "image_url" : e.target.value})
    }}></input>
    <button type="submit">Update</button>
    </form>
}
}
export default Edit;