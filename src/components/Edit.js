import { useState } from "react";
function Edit({pet}){
const [showForm,setShowForm] = useState(false)
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
    <input type="text"></input>
    <button type="submit">Update</button>
    </form>
}
}
export default Edit;