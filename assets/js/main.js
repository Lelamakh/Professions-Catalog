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
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

START for Contact page

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

END for Contact page

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - - */

/* - - - - - - - - -
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

mainslider______LM START  მთავარი გვერდის სლაიდერის დასაწყისი

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - - - - - */

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

/* - - - - - - - - - - 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

mainslider______LM END მთავარი გვერდის სლაიდერის დასასრული

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - - - - - - */

/* - - - - - - - -
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

START for List page 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - -*/

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი ამატებს და აცილებს ფავორიტის კლასს 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

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

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

MODAL START ( for FAVORITES Section ) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  let PSmodal = document.getElementById("PS-myModalFavorites");

  // Get the button that opens the modal
  let btn = document.getElementById("PS-myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    PSmodal.style.display = "flex";
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
      PSmodal.style.display = "none";
    }
  });
});

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

MODAL END ( for FAVORITES Section ) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

MODAL START ( for LIST PAGE FILTER ) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

document.addEventListener("DOMContentLoaded", function () {
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
  // window.onclick = function (event) {
  //   if (event.target == PSFilterModal) {
  //     PSFilterModal.style.display = "none";
  //   }
  // };
});

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

MODAL END ( for LIST PAGE FILTER ) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ძებნის ველისათვის (დასაწყისი)

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

//ეს კოდი ასუფთავებს ძებნის ველს

function clearInput() {
  document.getElementById("mySearchInput").value = "";
  filterContent();
}

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ძებნის ველისათვის (დასასრული) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასაწყისი) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

document.addEventListener("DOMContentLoaded", function () {
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
});

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასასრული) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ანაზღაურების სლაიდერის (დასაწისი)

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

document.addEventListener("DOMContentLoaded", function () {
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
});

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

ეს კოდი არის ანაზღაურების სლაიდერის (დასასრული) 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

/* ---------- 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

START for LOAD MORE 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

---------- */

document.addEventListener("DOMContentLoaded", function () {
  const itemContainer = document.getElementById("PS-result-cards");
  const itemsCards = itemContainer.querySelectorAll(".PS-result-card");
  const loadMoreBtn = document.getElementById("PS-load-more-btn");

  const initialItemsToShow = 9;
  const itemsToLoad = 9; // Number of items to show on each click
  let currentVisibleItems = initialItemsToShow;

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
});
/* ---------- 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

END for LOAD MORE 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
---------- */

/* - - - - - - - -
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

END for List page 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - -*/

/* - - - - - - - -
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

START for PROFESSIONS DETAILS PAGE 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - -*/

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("PS-openModalBtn");
  const openModalButton = document.getElementById("PS-openModalButton");
  const copyLinkModal = document.getElementById("PS-copyLinkModal");
  const closeModalBtn = document.getElementById("PS-closeModalBtn");
  const copyBtn = document.getElementById("PS-copyBtn");
  const linkToCopyInput = document.getElementById("PS-linkToCopy");

  const removeCopyImage = document.getElementById("PS-CopyImage");

  const newImage = document.createElement("img");
  newImage.src = "assets/images/Copied.svg";

  openModalBtn.addEventListener("click", () => {
    copyLinkModal.classList.add("PS-show-modal");
  });

  openModalButton.addEventListener("click", () => {
    copyLinkModal.classList.add("PS-show-modal");
  });

  closeModalBtn.addEventListener("click", () => {
    copyLinkModal.classList.remove("PS-show-modal");
  });

  // Close modal when clicking outside the content
  copyLinkModal.addEventListener("click", (event) => {
    if (event.target === copyLinkModal) {
      copyLinkModal.classList.remove("PS-show-modal");
    }
  });

  copyBtn.addEventListener("click", () => {
    linkToCopyInput.select(); // Select the text in the input field
    linkToCopyInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(linkToCopyInput.value)
        .then(() => {
          copyBtn.removeChild(removeCopyImage);
          copyBtn.appendChild(newImage);

          // copyBtn.textContent = "Copied!";
          setTimeout(() => {
            copyBtn.removeChild(newImage);
            copyBtn.appendChild(removeCopyImage);

            // copyBtn.textContent = "Copy";
          }, 2000); // Reset button text after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert("Failed to copy link. Please copy it manually.");
        });
    }

    // else {
    //   // Fallback for older browsers
    //   document.execCommand("copy");
    //   copyBtn.textContent = "Copied!";
    //   setTimeout(() => {
    //     copyBtn.textContent = "Copy";
    //   }, 2000);
    // }
  });
});

/* ============ შენთვის საინტერესო კურსები SLIDER START ============ */

// Select the necessary elements from the DOM
const scrollContainer = document.querySelector(".PS-cards");
const nextBtn = document.querySelector(".PS-next-arrow");
const prevBtn = document.querySelector(".PS-prev-arrow");

// Define the scroll amount
const scrollAmount = 624; // This controls how far the slider moves with each click

// Function to check scroll position and toggle button visibility
const checkScrollPosition = () => {
  if (!scrollContainer || !nextBtn || !prevBtn) return;

  const maxScrollLeft =
    scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const currentScrollLeft = scrollContainer.scrollLeft;
  // A small buffer for floating point inaccuracies
  const buffer = 1;

  // Hide prevBtn if at the very start
  if (currentScrollLeft <= buffer) {
    prevBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
  }

  // Hide nextBtn *only* if the user is at the very end of the content
  if (currentScrollLeft >= maxScrollLeft - buffer) {
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }
};

// Add a click event listener to the "next" button
if (nextBtn && scrollContainer) {
  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth", // Added smooth behavior for consistency
    });
    // Removed setTimeout, relying on the scroll event listener below
  });
}

// Add a click event listener to the "previous" button
if (prevBtn && scrollContainer) {
  prevBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    // Removed setTimeout, relying on the scroll event listener below
  });
}

// *********** MODIFICATION ***********
// Check position when the page loads *except* for the next button's hiding logic

const initialCheck = () => {
  checkScrollPosition();
  // Force the next button to be visible initially, even if there's no room to scroll
  nextBtn.classList.remove("hidden");
};

initialCheck();

// And check position when the user manually scrolls (e.g., using mouse wheel or drag)
// The standard scroll listener keeps all logic active during user interaction
scrollContainer.addEventListener("scroll", checkScrollPosition);

/* ============ შენთვის საინტერესო კურსები SLIDER END ============ */

/* - - - - - - - -
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

END for PROFESSIONS DETAILS PAGE 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- - - - - - - -*/
