// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const entryPoint = document.querySelector(".cards-container");

axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(response => {
		const { articles } = response.data;
		console.log(articles);
		for (let key in articles) {
			let value = articles[key];
			console.log(value);
			value.forEach(item => {
				const newCard = createCard(item);
				entryPoint.appendChild(newCard);
			});
		}
	})
	.catch(error => {
		console.log("Not returned", error);
	});

function createCard(data) {
	const card = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgBox = document.createElement("div");
	const img = document.createElement("img");
	const by = document.createElement("span");

	img.src = `${data.authorPhoto}`;
	headline.textContent = `${data.headline}`;
	by.textContent = `By ${data.authorName}`;

	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgBox);
	imgBox.appendChild(img);
	author.appendChild(by);

	card.classList.add("card");
	headline.classList.add("headline");
	author.classList.add("author");
	imgBox.classList.add("img-container");

	return card;
}
