const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
    attacked() {
      if (this.health >= 20) {
        this.health -= 20;
      } else {
        alert("Character Died");
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
  };
  
  // Get DOM elements
  const nameEl = document.querySelector(".name");
  const classEl = document.getElementById("class");
  const levelEl = document.getElementById("level");
  const healthEl = document.getElementById("health");
  const imageEl = document.querySelector(".image");
  const logEl = document.getElementById("log");
  const attackedBtn = document.getElementById("attacked");
  const levelupBtn = document.getElementById("levelup");
  
  // Function to update UI
  function renderCharacter() {
    nameEl.textContent = character.name;
    classEl.textContent = character.class;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
    imageEl.src = character.image;
    imageEl.alt = character.name;
  }
  
  // Event handlers
  attackedBtn.addEventListener("click", () => {
    character.attacked();
    renderCharacter();
    logEl.textContent = "Character was attacked!";
  });
  
  levelupBtn.addEventListener("click", () => {
    character.levelUp();
    renderCharacter();
    logEl.textContent = "Character leveled up!";
  });
  
  // Initial render
  renderCharacter();
  