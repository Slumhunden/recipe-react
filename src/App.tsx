import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Logout from "./security/Logout";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout";
import RequireAuth from "./security/RequireAuth";
import AddCategory from "./recipes/AddCategory";

export default function App() {
  // const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes">
          <Route index element={<RecipesLayout />} /> // kan ikke få den her til at virke
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route
          path="add"
          element={
            <RequireAuth>
              <RecipeForm />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-category"
          element={
            <RequireAuth roles={["ADMIN"]}>
              <AddCategory />
            </RequireAuth>
          }
        />
        <Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>

        <Route path="/add" element={<RecipeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Layout>
  );
}
