/* STSRT for Contact page */

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".PS-section-FAQ-question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".PS-icon");

      if (answer.style.display == "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "-";
      }
    });
  });
});

/* END for Contact page */

/* mainslider______LM START */
const slides = document.querySelectorAll(".lmslide");
const dots = document.querySelectorAll(".lmdots .lmdot");
let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("lmslideactive", index === current);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("lmactivedot", index === current);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    updateSlides();
  });
});

setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlides();
}, 5000);

/* mainslider______LM END */

/* STSRT for List page */

// document.addEventListener("DOMContentLoaded", function () {
//   const parentDiv = document.querySelectorAll(".PS-result-card");
//   const childDiv = parentDiv.querySelectorAll(".PS-heart-div");

//   childDiv.addEventListener("click", function () {
//     parentDiv.classList.toggle("PS-favorite");
//     // childDiv.classList.toggle("PS-favorite");
//   });
// });

function updateItemCount() {
  const items = document.querySelectorAll(".PS-favorite"); // Select all elements with class 'item'
  const itemCount = items.length; // Get the count of selected elements
  document.getElementById("countDisplay").textContent = itemCount; // Update the display div
}

/* ეს კოდი ამატებს და აცილებს ფავორიტის კლასს */
document.addEventListener("DOMContentLoaded", function () {
  const childDivs = document.querySelectorAll(".PS-heart-div"); // Select all child divs

  childDivs.forEach((childDiv) => {
    childDiv.addEventListener("click", function () {
      // 'this' refers to the clicked childDiv
      // .parentNode gets the immediate parent element
      this.parentNode.classList.toggle("PS-favorite"); // Toggle a class on the parent
    });
  });
});

/* ეს კოდი ითვლის და გვიჩვენებს ფავორიტის კლასს */

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll("PS-favorite");
//   const itemCount = items.length;

//   const resultDiv = document.getElementById("result-display");
//   resultDiv.textContent = `${itemCount}`;
// });

// Function to count elements and update display

// Call the function initially to display the count on page load
// updateItemCount();

// If items are added or removed dynamically, call updateItemCount() again
// For example, if you add a new item with JavaScript:
// const newItem = document.createElement("div");
// newItem.classList.add("PS-favorite");
// newItem.textContent = "New Item";
// document.body.appendChild(newItem);
// updateItemCount(); // Call to update the count after adding the new item

/* END for List page */
