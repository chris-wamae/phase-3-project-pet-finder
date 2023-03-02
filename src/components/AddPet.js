import { useState } from "react"
function AddPet(){
    const [showForm,setShowForm] = useState(false)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setShowForm(false)
    }
    if(showForm === false){
        return <button 
        onClick={() => setShowForm(true)
        }>Add new pet</button>
    }else{
        return <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">Add</button>
        </form>
    }

}

export default AddPet;
