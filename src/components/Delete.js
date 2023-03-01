import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Delete() {
  const pets = useStore(petsStore);
  const handleDelete = () => {
    axios
      .delete("http://localhost:3000/pictures/19")
      .then((r) =>
        r.status === 200
          ? axios
              .get("http://localhost:3000/pictures")
              .then((r) => pets.setPetsStore(r.data))
          : console.log(r.status)
      );
  };
  return <button onClick={handleDelete}> Delete</button>;
}

export default Delete;