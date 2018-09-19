"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

var navigation = [{
	name: "About Us",
	link: "about.html"
}, {
	name: "Our Services",
	link: "services.html"
}, {
	name: "Testimonials",
	link: "testimonials.html"
}, {
	name: "Contact",
	link: "contact.html"
}, {
	name: "Test",
	link: "test.html"
}];

for (var i = 0; i < navigation.length; i++) {
	console.log(navigation[i].link);

	var newli = document.createElement("li");
	document.querySelector("ul").appendChild(newli);

	var atag = document.createElement("a");
	newli.appendChild(atag);

	atag.setAttribute('href', navigation[i].link);
	atag.innerHTML = navigation[i].name;
}

// var nav = document.querySelector("nav ul"),
//     navToggle = document.querySelector("nav .skip");
// if (navToggle) {
//   navToggle.addEventListener("click",
//   function(e) {
//   if (nav.className == "open") {
//     nav.className = "";
//   } else {
//     nav.className = "open";
//   }
//   e.preventDefault();
//   }, false);
// }

var nav = document.querySelector("nav");
var hamburger = document.querySelector(".hamburger");
console.log(hamburger);

hamburger.addEventListener('click', function (e) {
	nav.classList.toggle('active');
});

// navigation.addEventListener('click', function(e){
// hamburger.classList.toggle('active');
// e.preventDefault();
// }, false);

// when the user clicks the hamburger, the navigation appears


// take that data and make a navigation out of it
// take that data and make all the elements we need for a navigation and display them
// take that data and make all the elements we need for a navigation and put them inside the navigation UL
// take that data and make LIs and A elements we need for a navigation and put them inside the navigation UL
// take that data and make LIs and A elements and give them text and href from the data and put them inside the navigation UL


// find an element so we can do stuff to it later
// innerHTML to set the text
// appendChild for putting elements in elements
// setAttribute to set attributes like href on elements


// user clicks hamburger icon, nav bar pops up
// user clicks hamburger icon, nav bar becomes visible

// techniques
// addEventListener
// .style to the element
//# sourceMappingURL=main.js.map
