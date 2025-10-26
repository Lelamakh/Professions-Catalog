/* XXXXXXXXXXXXXX New HEADER Mobile Menu START XXXXXXXXXXXXXXX */

const toggleModalBtnMobile = document.getElementById("PS-toggleModalBtn");
const myModalMobile = document.getElementById("PS-myModal");

toggleModalBtnMobile.addEventListener("click", () => {
  myModalMobile.classList.toggle("active");
});

// Optional: Close modal by clicking the backdrop
myModalMobile.addEventListener("click", (e) => {
  if (e.target === myModalMobile) {
    myModalMobile.classList.remove("active");
  }
});

/* XXXXXXXXXXXXXX New HEADER Mobile Menu END XXXXXXXXXXXXXXX */

/* - - - - - - - -


STSRT for Contact page


- - - - - - - -*/

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

/* - - - - - - - -


END for Contact page


- - - - - - - - */

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

// modal________LM START

// const secondButton = document.querySelector(".lmsecondbutton");
// const modal = document.querySelector(".lmmodaloverlay");
// const quizSection = document.querySelector(".lmquizsection");
// const backButton = document.querySelector(".lmbackbutton");

// // // Show modal & blur background
// secondButton.addEventListener("click", () => {
//   modal.style.display = "flex";
//   quizSection.classList.add("blur");
// });

// // // Close modal & remove blur
// backButton.addEventListener("click", (e) => {
//   e.preventDefault(); // prevent navigation
//   modal.style.display = "none";
//   quizSection.classList.remove("blur");
// });

/* - - - - - - - -



START for List page 



- - - - - - - -*/

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

/* MODAL START ( for FAVORITES Section ) */

// Get the modal
let PSmodal = document.getElementById("PS-myModalFavorites");

// Get the button that opens the modal
let btn = document.getElementById("PS-myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  PSmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  PSmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == PSmodal) {
    PSmodal.style.display = "none";
  }
};

// Optional: Close modal by clicking the backdrop
PSmodal.addEventListener("click", (e) => {
  if (e.target === PSmodal) {
    PSmodal.classList.remove("active");
  }
});

/* MODAL END ( for FAVORITES Section ) */

/* MODAL START ( for LIST PAGE FILTER ) */

// Get the modal
let PSFilterModal = document.getElementById("PS-filter-input");

// Get the button that opens the modal
let filterBtn = document.getElementById("PS-filter-name");

// Get the <span> element that closes the modal
let FilterSpan = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
filterBtn.onclick = function () {
  PSFilterModal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
FilterSpan.onclick = function () {
  PSFilterModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == PSFilterModal) {
    PSFilterModal.style.display = "none";
  }
};

/* MODAL END ( for LIST PAGE FILTER ) */

/* ეს კოდი არის ძებნის ველისათვის (დასაწყისი) */

// function filterContent() {
//   var input, filter, cards, card, i, txtValue;
//   input = document.getElementById("mySearchInput");
//   filter = input.value.toUpperCase(); // Get input value and convert to uppercase for case-insensitive search
//   cards = document.getElementById("PS-result-cards");
//   card = cards.getElementsByClassName("PS-result-card"); // Get all list items

//   // Loop through all list items, and hide those that don't match the search query
//   for (i = 0; i < card.length; i++) {
//     txtValue = card[i].textContent || card[i].innerText; // Get the text content of the list item
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       card[i].style.display = ""; // Show the item if it matches
//     } else {
//       card[i].style.display = "none"; // Hide the item if it doesn't match
//     }
//   }
// }

function clearInput() {
  document.getElementById("mySearchInput").value = "";
  filterContent();
}

/* ეს კოდი არის ძებნის ველისათვის (დასასრული) */

/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასაწყისი) */

const buttonContainer1 = document.getElementById("PS-filter-choices-1");
const buttonContainer2 = document.getElementById("PS-filter-choices-2");
const buttonContainer3 = document.getElementById("PS-filter-choices-3");
const buttonContainer4 = document.getElementById("PS-filter-choices-4");
const buttons1 = buttonContainer1.querySelectorAll("button");
const buttons2 = buttonContainer2.querySelectorAll("button");
const buttons3 = buttonContainer3.querySelectorAll("button");
const buttons4 = buttonContainer4.querySelectorAll("button");

buttons1.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("PS-active");
  });
});

buttons2.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("PS-active");
  });
});

buttons3.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("PS-active");
  });
});

buttons4.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("PS-active");
  });
});
/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასასრული) */

/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასაწყისი) (ნომერი 2)*/

// const buttonContainer2 = document.getElementById("PS-filter-choices-2");
// const buttons2 = buttonContainer2.querySelectorAll("button");

// buttons2.forEach((button) => {
//   button.addEventListener("click", function () {
//     this.classList.toggle("PS-active");
//   });
// });

/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასასრული) (ნომერი 2) */

/* 



ეს კოდი არის ანაზღაურების სლაიდერის (დასაწისი)



*/

const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");
const minInput = document.getElementById("min-input");
const maxInput = document.getElementById("max-input");
const sliderFill = document.querySelector(".slider-fill");

const min = parseFloat(minSlider.min);
const max = parseFloat(minSlider.max);

// Updates the position and width of the purple fill section
const updateSliderFill = () => {
  const minVal = parseFloat(minSlider.value);
  const maxVal = parseFloat(maxSlider.value);
  const leftPercentage = ((minVal - min) / (max - min)) * 100;
  const rightPercentage = ((max - maxVal) / (max - min)) * 100;

  sliderFill.style.left = leftPercentage + "%";
  sliderFill.style.right = rightPercentage + "%";
};

// Event handler for when a slider thumb is moved
const handleSliderChange = () => {
  let minVal = parseFloat(minSlider.value);
  let maxVal = parseFloat(maxSlider.value);

  // Prevent the minimum value from exceeding the maximum
  if (minVal > maxVal) {
    minSlider.value = maxVal;
    minVal = maxVal;
  }

  // Prevent the maximum value from going below the minimum
  if (maxVal < minVal) {
    maxSlider.value = minVal;
    maxVal = minVal;
  }

  minInput.value = minVal;
  maxInput.value = maxVal;

  updateSliderFill();
};

// Event handler for when a manual input value is changed
const handleInputChange = () => {
  let minVal = parseFloat(minInput.value);
  let maxVal = parseFloat(maxInput.value);

  // Clamp values to the defined slider range
  minVal = Math.min(Math.max(minVal, min), max);
  maxVal = Math.min(Math.max(maxVal, min), max);

  // Ensure the min value is not greater than the max value
  if (minVal > maxVal) {
    minInput.value = maxVal;
    minVal = maxVal;
  }

  // Ensure the max value is not less than the min value
  if (maxVal < minVal) {
    maxInput.value = minVal;
    maxVal = minVal;
  }

  minSlider.value = minVal;
  maxSlider.value = maxVal;

  updateSliderFill();
};

// Attach event listeners
minSlider.addEventListener("input", handleSliderChange);
maxSlider.addEventListener("input", handleSliderChange);
minInput.addEventListener("input", handleInputChange);
maxInput.addEventListener("input", handleInputChange);

// Initial update to set the fill position on page load
updateSliderFill();

/* 



ეს კოდი არის ანაზღაურების სლაიდერის (დასასრული) 



*/

/* ეს კოდი არის ფავორიტების ველისათვის (დასაწყისი) */

// document.addEventListener("DOMContentLoaded", function () {
//   const parentDiv = document.querySelectorAll(".PS-result-card");
//   const childDiv = parentDiv.querySelectorAll(".PS-heart-div");

//   childDiv.addEventListener("click", function () {
//     parentDiv.classList.toggle("PS-favorite");
//     // childDiv.classList.toggle("PS-favorite");
//   });
// });

// function updateItemCount() {
//   const items = document.querySelectorAll(".PS-favorite"); // Select all elements with class 'item'
//   const itemCount = items.length; // Get the count of selected elements
//   document.getElementById("countDisplay").textContent = itemCount; // Update the display div
// }

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

/* ეს კოდი არის ფავორიტების ველისათვის (დასასრული) */

/* ---------- START for LOAD MORE ---------- */

const itemContainer = document.getElementById("PS-result-cards");
const itemsCards = itemContainer.querySelectorAll(".PS-result-card");
const loadMoreBtn = document.getElementById("PS-load-more-btn");

const initialItemsToShow = 9;
const itemsToLoad = 9; // Number of items to show on each click
let currentVisibleItems = initialItemsToShow;

// Show initial items (already handled by CSS, but good for dynamic scenarios)
// for (let i = 0; i < initialItemsToShow; i++) {
//   if (items[i]) {
//     items[i].style.display = 'block';
//   }
// }

loadMoreBtn.addEventListener("click", () => {
  for (
    let i = currentVisibleItems;
    i < currentVisibleItems + itemsToLoad;
    i++
  ) {
    if (itemsCards[i]) {
      itemsCards[i].style.display = "block"; // Or 'flex', 'grid', etc., depending on your layout
    }
  }
  currentVisibleItems += itemsToLoad;

  if (currentVisibleItems >= itemsCards.length) {
    loadMoreBtn.style.display = "none"; // Hide button if all items are visible
  }
});

// Initial check to hide button if there are no more items to load initially
if (currentVisibleItems >= itemsCards.length) {
  loadMoreBtn.style.display = "none";
}
/* ---------- END for LOAD MORE ---------- */

/* ---------------------- START for NEW HEADER ----------------------- */

// const openModalBtn = document.getElementById("Burger-Menu");
// const modalOverlay = document.querySelector(".Mobile-Menu");

// // Function to open the modal
// const openModal = () => {
//   modalOverlay.classList.remove("PS-mobile-menu-hidden");
// };

// // Function to close the modal
// const closeModal = () => {
//   modalOverlay.classList.add("PS-mobile-menu-hidden");
// };

// // Open the modal when the button is clicked
// openModalBtn.addEventListener("click", openModal);

// // Close the modal when clicking outside of the content
// modalOverlay.addEventListener("click", (e) => {
//   if (e.target === modalOverlay) {
//     closeModal();
//   }
// });

/* ---------------------- END for NEW HEADER ----------------------- */

/* - - - - - - - -



END for List page 



- - - - - - - - */

/* - - - - - - - -



START for index-PDP page 



- - - - - - - - */

/* გალერეა START */

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("PS-mySlides");
//   let dots = document.getElementsByClassName("PS-demo");
//   let captionText = document.getElementById("PS-caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

/* გალერეა END */

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

/* ----- Scroll Window START ----- */

//   ???????
//   ???????

/* ----- Scroll Window START ----- */

/* - - - - - - - -



END for index-PDP page 



- - - - - - - - */
