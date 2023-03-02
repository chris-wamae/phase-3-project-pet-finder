import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Search(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
axios.get(`https://philoxenia.onrender.com/pets/search?q=${e.target.value}`).then( (r) =>
    console.log(r.data)
    //pets.setPetsStore(r.data)

)
} 
return(
<input type="text" placeholder="Search pet name or breed" onChange={handleSearch}></input>
)
}
export default Search;
