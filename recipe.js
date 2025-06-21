const recipeData = {
    name: "Apple Crisp",
    image: "images/apple-crisp.jpg",
    category: "dessert",
    rating: 4,
    description: "This apple crisp recipe is a simple yet delicious fall dessert that’s great served warm with vanilla ice cream."
  };
  
  function generateRecipeCard(recipe) {
    const main = document.getElementById("recipeContainer");
    main.innerHTML = `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <span class="tag">${recipe.category}</span>
        <h2>${recipe.name}</h2>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${"★".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
        </span>
        <p class="description">${recipe.description}</p>
      </div>
    `;
  }
  
  generateRecipeCard(recipeData);
  