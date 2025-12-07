import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // ensure data.json is in /public
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.title}</h1>

      {/* Image */}
      <div className="mb-6 rounded-lg overflow-hidden shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Summary */}
      <section className="mb-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </section>

      {/* Ingredients */}
      {recipe.ingredients && (
        <section className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <section className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions.map((inst, index) => (
              <li key={index} className="mb-1">
                {inst}
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

export default RecipeDetail;
