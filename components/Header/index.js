// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const content = document.querySelector(".header-container");

function Header() {
	// elements
	const headerComp = document.createElement("div");
	const date = document.createElement("span");
	const title = document.createElement("h1");
	const temperature = document.createElement("span");
	// structure
	headerComp.appendChild(date);
	headerComp.appendChild(title);
	headerComp.appendChild(temperature);
	// class names
	headerComp.classList.add("header");
	date.classList.add("date");
	temperature.classList.add("temp");
	// text content
	date.textContent = `SMARCH 28, 2019`;
	title.textContent = `Lambda Times`;
	temperature.textContent = `98°`;
	return headerComp;
}

content.appendChild(Header());
