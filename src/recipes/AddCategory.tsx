//@ts-nocheck
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../services/apiFacade";

export default function AddCategory() {
  const category = useRef("");
  const navigate = useNavigate();

  async function submitNewCategory() {
    const name = category.current?.value;

    try {
      await addCategory(name);
      alert("Category added successfully");
      navigate("/categories");
      category.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Add Category</h2>
      <label htmlFor="name">Name</label>&nbsp;
      <input type="text" id="name" ref={category} />
      <button className="" onClick={submitNewCategory}>
        Add
      </button>
    </>
  );
}
