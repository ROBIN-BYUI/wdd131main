const recipes = [
  {
    name: "Apple Crisp",
    image: "apple.jpg",
    category: "dessert",
    tags: ["dessert", "fruit", "fall"],
    rating: 4,
    description:
      "This apple crisp recipe is a simple yet delicious fall dessert that’s great served warm with vanilla ice cream.",
  },
  {
    name: "Spaghetti Carbonara",
    image: "images.jpeg",
    category: "main",
    tags: ["pasta", "quick", "italian"],
    rating: 5,
    description:
      "A creamy and flavorful Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    name: "Avocado Toast",
    image: "Avocado-Toast-08.jpg", // ✅ fixed image path
    category: "breakfast",
    tags: ["quick", "healthy", "vegetarian"],
    rating: 3,
    description:
      "Simple and satisfying avocado toast topped with chili flakes, olive oil, and lemon juice.",
  }
];

// Utility Functions
function getRandomListEntry(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Template Functions
function tagsTemplate(tags) {
  return `<ul class="tags">${tags.map(tag => `<li>${tag}</li>`).join("")}</ul>`;
}

function ratingTemplate(rating) {
  return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
    ${"★".repeat(rating)}${"☆".repeat(5 - rating)}
  </span>`;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="Image of ${recipe.name}">
      <span class="tag">${recipe.category}</span>
      <h2>${recipe.name}</h2>
      ${ratingTemplate(recipe.rating)}
      <p class="description">${recipe.description}</p>
      ${tagsTemplate(recipe.tags)}
    </div>
  `;
}

// Render Function
function renderRecipes(recipeList) {
  const container = document.getElementById("recipeContainer");
  if (recipeList.length === 0) {
    container.innerHTML = `<p>No recipes found. Try a different search.</p>`;
  } else {
    container.innerHTML = recipeList.map(recipeTemplate).join("");
  }
}

// Search Filtering
function filterRecipes(query) {
  const lower = query.toLowerCase();
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(lower) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(lower))
  );
}

// Form Handler
function searchHandler(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");
  const query = input.value.trim();
  const results = filterRecipes(query);
  renderRecipes(results);
}

// Init
function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);

  const form = document.getElementById("searchForm");
  form.addEventListener("submit", searchHandler);
}

init();
