// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem 0",
            borderBottom: "1px solid #eee",
            marginBottom: "1rem",
          }}
        >
          <Link to="/" style={navLinkStyle}>
            All Recipes
          </Link>
          <Link to="/add" style={navLinkStyle}>
            Add New Recipe
          </Link>
        </nav>

        {/* Page Title */}
        <header style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ margin: 0, fontSize: "2rem", color: "#333" }}>
            My Recipe Sharing App
          </h1>
        </header>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Reusable nav link style
const navLinkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "500",
  padding: "0.5rem 0",
};

navLinkStyle[":hover"] = {
  textDecoration: "underline",
};

export default App;