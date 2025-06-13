const articles = [
    {
      date: "July 5, 2022",
      age: "10–14",
      genre: "Fantasy",
      rating: "★★★★",
      title: "Septimus Heap Book One: Magyk",
      image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      description: "A fantasy adventure that begins an epic series full of magic and mystery."
    },
    {
      date: "July 8, 2022",
      age: "12–15",
      genre: "Mystery",
      rating: "★★★☆",
      title: "The Mysterious Benedict Society",
      image: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      description: "A story of four gifted children recruited for a secret mission that challenges their wits and bravery."
    },
    {
      date: "July 15, 2022",
      age: "8–12",
      genre: "Adventure",
      rating: "★★★★★",
      title: "Percy Jackson and the Olympians: The Lightning Thief",
      image: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      description: "Percy discovers he is a demigod and goes on a quest to prevent a war among the gods."
    }
  ];

  function displayArticles() {
    const container = document.querySelector("#articles");
  
    articles.forEach(item => {
      const article = document.createElement("article");
      article.classList.add("article");
  
      article.innerHTML = `
        <div class="article-left">
          <div>${item.date}</div>
          <div>${item.age}</div>
          <div>${item.genre}</div>
          <div>${item.rating}</div>
        </div>
        <div class="article-right">
          <h2>${item.title}</h2>
          <img src="${item.image}" alt="Cover of ${item.title}">
          <p>${item.description}</p>
        </div>
      `;
  
      container.appendChild(article);
    });
  }

  displayArticles();
  