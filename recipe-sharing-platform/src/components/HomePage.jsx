import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Make sure data.json is in /public folder
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="px-6 py-8">
  <h1 className="text-3xl font-bold mb-6 text-center">
    Recipe Sharing Platform
  </h1>

  {/* Add New Recipe button */}
  <div className="text-center mb-6">
    <Link
      to="/add-recipe"
      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    >
      Add New Recipe
    </Link>
  </div>

  {/* Recipe grid */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {recipes.map((recipe) => (
      <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition transform duration-200">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
            <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Recipe
            </button>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

  );
}

export default HomePage;
