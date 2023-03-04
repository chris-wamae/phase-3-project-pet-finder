import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Search(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
axios.post(`http://0.0.0.0:9292/pets/search_all`,{
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
