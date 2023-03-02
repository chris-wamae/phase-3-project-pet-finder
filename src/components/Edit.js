import { useState } from "react";
function Edit({pet}){
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
}
if(showForm === false){
    return <button 
    onClick={() => setShowForm(true)
    }>Update pet</button>
}else{
    return <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) =>{
    setEditPet({...editPet, "name":e.target.value})
    }}></input>
    <input type="text" onChange={(e) =>{
    setEditPet({...editPet, "breed" : e.target.value})
    }}></input>
    <input type="url" onChange={(e) =>{
    setEditPet({...editPet, "image_url" : e.target.value})
    }}></input>
    <button type="submit">Update</button>
    </form>
}
}
export default Edit;