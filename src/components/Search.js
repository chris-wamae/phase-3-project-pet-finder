import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Search(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
axios.post(`https://philoxenia.onrender.com/pets/search`,{
    query: e.target.value
}).then( (r) =>
    pets.setPetsStore(r.data)
)
} 
return(
<input type="text" placeholder="Search pet name or breed" onChange={handleSearch}></input>
)
}
export default Search;
