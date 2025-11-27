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

/* ========== კითხვა-პასუხის ღილაკების დასაწყისი ========== */

document.addEventListener("DOMContentLoaded", () => {
  // Check if the body element has the required class
  if (document.body.classList.contains("Profesia-Contact")) {
    const questions = document.querySelectorAll(".PS-section-FAQ-question");
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        question.classList.toggle("active-contact");
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".PS-icon");

        // Define the HTML for both the Plus and Minus icons
        const plusIconHTML = `<img src="assets/images/Plus.svg" alt="Plus.svg" />`;
        const minusIconHTML = `<img src="assets/images/Minus.svg" alt="Minus.svg" />`; // Assumes you have a Minus SVG

        if (answer.style.display == "block") {
          answer.style.display = "none";
          // Use innerHTML to insert the image HTML for "Plus"
          icon.innerHTML = plusIconHTML;
        } else {
          answer.style.display = "block";
          // Use innerHTML to insert the image HTML for "Minus"
          icon.innerHTML = minusIconHTML;
        }
      });
    });
  }
});

/* ========== კითხვა-პასუხის ღილაკების დასასრული ========== */

/* ========== გაგზავნის მოდალის დასაწყისი ========== */

document.addEventListener("DOMContentLoaded", () => {
  // Check if the body element has the required class
  if (document.body.classList.contains("Profesia-Contact")) {
    // Get the modal element
    const modal = document.getElementById("PS-Modal-Sent");

    // If modal doesn't exist on the page, stop the script here
    if (!modal) return;

    // Get the specific button that opens the modal by its ID
    const openModalBtn = document.getElementById("PS-openSentModalBtn");

    // Get the button that closes the modal
    const closeModalBtn = document.getElementById("PS-closeSentModalBtn");

    // Function to open the modal by adding the class
    const openModal = () => {
      modal.classList.add("PS-show-modal");
    };

    // Function to close the modal by removing the class
    const closeModal = () => {
      modal.classList.remove("PS-show-modal");
    };

    // Use the specific trigger ID to open the modal
    if (openModalBtn) {
      openModalBtn.addEventListener("click", openModal);
    }

    // When the user clicks on the close button, close the modal
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

    // Optional: Close the modal if the user clicks anywhere outside of the content
    // window.addEventListener("click", (event) => {
    //   if (event.target == modal) {
    //     closeModal();
    //   }
    // });
  }
});

/* ========== გაგზავნის მოდალის დასასრული ========== */

/* ========== არ გაგზავნის (NOT SENT) მოდალის დასაწყისი ========== */

document.addEventListener("DOMContentLoaded", () => {
  // Check if the body element has the required class
  if (document.body.classList.contains("Profesia-Contact")) {
    // Get the modal element
    const modal = document.getElementById("PS-Modal-NotSent");

    // If modal doesn't exist on the page, stop the script here
    if (!modal) return;

    // Get the specific button that opens the modal by its ID
    const openModalBtn = document.getElementById("PS-openNotSentModalBtn");
    // ^^^ THIS LINE GETS YOUR TRIGGER ELEMENT ^^^

    // Get the button that closes the modal
    const closeModalBtn = document.getElementById("PS-closeNotSentModalBtn");

    // Function to open the modal by adding the class
    const openModal = () => {
      modal.classList.add("PS-show-modal");
    };

    // Function to close the modal by removing the class
    const closeModal = () => {
      modal.classList.remove("PS-show-modal");
    };

    // Use the specific trigger ID to open the modal
    if (openModalBtn) {
      openModalBtn.addEventListener("click", openModal);
      // ^^^ THIS ADDS THE CLICK LISTENER TO THE TRIGGER ^^^
    }

    // When the user clicks on the close button, close the modal
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

    // Optional: Close the modal if the user clicks anywhere outside of the content
    // window.addEventListener("click", (event) => {
    //   if (event.target == modal) {
    //     closeModal();
    //   }
    // });
  }
});

/* ========== არ გაგზავნის (NOT SENT) მოდალის დასასრული ========== */

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

const sliderContainer = document.querySelector(".lmmonitorslider");

const originalSlides = Array.from(document.querySelectorAll(".lmmonslide"));
const totalOriginalSlides = originalSlides.length;
let currentSlideIndex = 0;

const firstSlideClone = originalSlides[0].cloneNode(true);
sliderContainer.appendChild(firstSlideClone);

const allSlides = document.querySelectorAll(".lmmonslide");
const totalSlidesInDom = allSlides.length;

function updateSliderPosition(instant = false) {
  const offset = -currentSlideIndex * 100;

  if (instant) {
    sliderContainer.style.transition = "none";
  } else {
  }

  sliderContainer.style.transform = `translateX(${offset}%)`;

  setTimeout(() => {
    sliderContainer.style.transition = "";
  }, 50);
}

function nextSlide() {
  currentSlideIndex++;
  updateSliderPosition(false);

  if (currentSlideIndex === totalOriginalSlides) {
    setTimeout(() => {
      currentSlideIndex = 0;
      updateSliderPosition(true);
    }, 0);
  }
}

updateSliderPosition(true);
setInterval(nextSlide, 2000);

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
  // Select all elements with the class "PS-heart-div"
  const childDivs = document.querySelectorAll(".PS-heart-div");

  // Iterate over each selected div to attach an event listener
  childDivs.forEach((childDiv) => {
    childDiv.addEventListener("click", function (event) {
      // --- Prevent Link Action ---
      // Stop the click from triggering the parent <a> tag's navigation
      event.preventDefault();
      // Stop the event from bubbling up the DOM tree further
      event.stopPropagation();

      // --- Your Custom Logic ---
      // 'this' refers to the clicked childDiv
      // .parentNode gets the immediate parent element (which is .PS-result-card in your HTML)
      this.parentNode.classList.toggle("PS-favorite");

      // console.log("Favorite class toggled on card, link action prevented.");
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
  const bodyElement = document.body; // Reference to the body element

  // Get the button that opens the modal
  let btn = document.getElementById("PS-myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // Function to disable background scroll
  function disableBackgroundScroll() {
    if (bodyElement) {
      bodyElement.style.overflow = "hidden"; // Prevents scrolling
    }
  }

  // Function to enable background scroll
  function enableBackgroundScroll() {
    if (bodyElement) {
      bodyElement.style.overflow = ""; // Resets overflow to default (usually visible)
    }
  }

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    PSmodal.style.display = "flex";
    disableBackgroundScroll(); // Disable scroll when modal opens
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    PSmodal.style.display = "none";
    enableBackgroundScroll(); // Enable scroll when modal closes
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == PSmodal) {
      PSmodal.style.display = "none";
      enableBackgroundScroll(); // Enable scroll when modal closes via outside click
    }
  };

  // Optional: Close modal by clicking the backdrop
  // (This handler is redundant given the window.onclick handler above, but safe to keep)
  PSmodal.addEventListener("click", (e) => {
    if (e.target === PSmodal) {
      PSmodal.style.display = "none";
      enableBackgroundScroll(); // Enable scroll when modal closes via backdrop
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
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-List")) {
    return;
  }
  let PSFilterModal = document.getElementById("PS-filter-input");
  let filterBtn = document.getElementById("PS-filter-name");
  // The close button span (using getElementsByClassName correctly here)
  let FilterSpan = document.getElementsByClassName("close2")[0];
  // Define the breakpoint (e.g., 768px for tablet/desktop boundary)
  const DESKTOP_MIN_WIDTH = 768;

  if (PSFilterModal && filterBtn && FilterSpan) {
    // Function to disable background scroll
    function disableBackgroundScroll() {
      // Check if we are NOT in desktop mode before disabling scroll
      if (window.innerWidth < DESKTOP_MIN_WIDTH) {
        bodyElement.style.overflow = "hidden";
      }
    }

    // Function to enable background scroll
    function enableBackgroundScroll() {
      bodyElement.style.overflow = ""; // Resets to default (usually 'visible')
    }

    // Open Modal
    filterBtn.onclick = function () {
      PSFilterModal.style.display = "flex";
      disableBackgroundScroll(); // Disable scroll when modal opens
    };

    // Close Modal via X button
    FilterSpan.onclick = function () {
      PSFilterModal.style.display = "none";
      enableBackgroundScroll(); // Enable scroll when modal closes
    };

    // --- Prevent Hiding on Desktop and Close via Outside Click (Mobile Only) ---
    window.onclick = function (event) {
      // Check if the current window width is greater than or equal to the desktop breakpoint
      const isDesktop = window.innerWidth >= DESKTOP_MIN_WIDTH;

      if (isDesktop) {
        // In desktop mode, we EXIT early and DO NOT close the modal on outside click.
        return;
      }

      // This part only runs if NOT in desktop mode (mobile/tablet)
      if (event.target === PSFilterModal) {
        PSFilterModal.style.display = "none";
        enableBackgroundScroll(); // Enable scroll when modal closes via outside click
      }
    };
    // --- End Logic ---

    // Optional: Add a listener for window resize to handle orientation changes
    // in case the user resizes while the modal is open in mobile view.
    window.addEventListener("resize", function () {
      if (
        window.innerWidth >= DESKTOP_MIN_WIDTH &&
        PSFilterModal.style.display === "flex"
      ) {
        // If it becomes desktop size while open, ensure scroll is enabled
        enableBackgroundScroll();
      } else if (
        window.innerWidth < DESKTOP_MIN_WIDTH &&
        PSFilterModal.style.display === "flex"
      ) {
        // If it becomes mobile size while open, ensure scroll is disabled
        disableBackgroundScroll();
      }
    });
  } else {
    console.warn("One or more modal elements were not found on the page.");
  }
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

document.addEventListener("DOMContentLoaded", function () {
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-List")) {
    // Exit the function if the class is not present
    return;
  }

  const searchInput = document.getElementById("mySearchInput");
  const clearButton = document.querySelector(".PS-clearInput-button");

  // Function to toggle the visibility of the clear button
  const toggleClearButton = () => {
    if (searchInput.value.length > 0) {
      clearButton.classList.remove("hidden");
    } else {
      clearButton.classList.add("hidden");
    }
  };

  // Show/hide the button when the user types
  searchInput.addEventListener("input", toggleClearButton);

  // Show/hide the button when the input gains or loses focus
  searchInput.addEventListener("focus", toggleClearButton);
  searchInput.addEventListener("blur", () => {
    // Hide the button on blur if the input is empty
    if (searchInput.value.length === 0) {
      clearButton.classList.add("hidden");
    }
  });

  // Clear the input field when the clear button is clicked
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    clearButton.classList.add("hidden");
    searchInput.focus(); // Keep focus on the input after clearing
  });

  // function clearInput() {
  //   document.getElementById("mySearchInput").value = "";
  //   filterContent();
  // }
});
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
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-List")) {
    // Exit the function if the class is not present
    return;
  }

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
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-List")) {
    // Exit the function if the class is not present
    return;
  }

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
  // Select the body element and check if it has the class "Profesia-List"
  const body = document.body;

  if (!body.classList.contains("Profesia-List")) {
    // Exit the function if the class is not present
    return;
  }

  // The original title check has been replaced with the body class check
  /* if (document.title !== "List") {
    return;
  } */

  const itemContainer = document.getElementById("PS-result-cards");
  // Ensure the container exists before proceeding
  if (!itemContainer) {
    console.error("Item container #PS-result-cards not found.");
    return;
  }

  const itemsCards = itemContainer.querySelectorAll(".PS-result-card");
  const loadMoreBtn = document.getElementById("PS-load-more-btn");

  const initialItemsToShow = 9;
  const itemsToLoad = 9; // Number of items to show on each click
  let currentVisibleItems = initialItemsToShow;

  // Ensure the button and items exist before adding listeners
  if (loadMoreBtn && itemsCards.length > 0) {
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
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-Internal")) {
    // Exit the function if the class is not present
    return;
  }

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

/* მსგავსი პროფესიების სლაიდერის დასაწყისი */

document.addEventListener("DOMContentLoaded", function () {
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-Internal")) {
    // Exit the function if the class is not present
    return;
  }

  let mySwiper = new Swiper(".my-slider", {
    // Default settings for screens less than 600px (mobile-first approach)
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 600px
      600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});

/* მსგავსი პროფესიების სლაიდერის დასასრული */

/* ============ შენთვის საინტერესო კურსები SLIDER START ============ */

document.addEventListener("DOMContentLoaded", function () {
  // Select the body element and check if it has the class "forJavascript"
  const bodyElement = document.body;
  if (!bodyElement || !bodyElement.classList.contains("Profesia-Internal")) {
    // Exit the function if the class is not present
    return;
  }

  const scrollContainer = document.querySelector(".PS-cards");
  const nextBtn = document.querySelector(".PS-next-arrow");
  const prevBtn = document.querySelector(".PS-prev-arrow");
  const scrollAmount = 624;

  let isDragging = false;
  let startX;
  let scrollLeft;
  let didDrag = false;
  // NEW: Flag to temporarily disable clicks
  let isClickDisabled = false;

  const checkScrollPosition = () => {
    // ... (rest of the checkScrollPosition logic remains the same) ...
    if (!scrollContainer || !nextBtn || !prevBtn) return;
    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const currentScrollLeft = scrollContainer.scrollLeft;
    const buffer = 1;

    if (currentScrollLeft <= buffer) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (currentScrollLeft >= maxScrollLeft - buffer) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  };

  // Add click listeners for buttons (remain the same)
  if (nextBtn && scrollContainer) {
    nextBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }

  if (prevBtn && scrollContainer) {
    prevBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  }

  // *********** DRAG AND CLICK LOGIC REFINEMENT ***********

  // Add a permanent click listener to the container
  scrollContainer.addEventListener("click", (e) => {
    if (isClickDisabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      // Reset the flag immediately after blocking the event
      isClickDisabled = false;
      return false;
    }
    // If isClickDisabled is false, the event proceeds normally to the link
  });

  // 1. Mouse Down Event: Start the drag process
  scrollContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    didDrag = false; // Reset drag flag
    scrollContainer.classList.add("dragging");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    e.preventDefault();
  });

  // 2. Mouse Up Event: End the drag process and handle links
  window.addEventListener("mouseup", () => {
    isDragging = false;
    scrollContainer.classList.remove("dragging");

    if (didDrag) {
      // Temporarily disable clicks immediately following this mouseup event
      isClickDisabled = true;
      // We rely on the permanent 'click' listener above to catch and prevent the event
    }
    // Note: We don't use the temporary listener/timeout method from the previous suggestion here.
  });

  // 3. Mouse Move Event: Handle the actual scrolling while dragging
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5;

    // Define a small threshold (e.g., 5 pixels)
    if (Math.abs(walk) > 5) {
      didDrag = true;
    }

    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  // *********** END DRAG AND CLICK LOGIC REFINEMENT ***********

  // Check position when the page loads
  const initialCheck = () => {
    checkScrollPosition();
    nextBtn.classList.remove("hidden");
  };

  initialCheck();

  scrollContainer.addEventListener("scroll", checkScrollPosition);
});

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

/* ========================= დამალვადი ჰედერი დესკტოპისათვის (დასაწყისი) ========================= */
// Get the header element
const header = document.getElementById("header");

// Function to handle the header visibility logic during scroll
function handleScroll() {
  // Get the current scroll position
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  // Check scroll direction
  if (currentScrollTop > window.lastScrollTop) {
    // Scrolling Down: Add the hide class
    header.classList.add("hide-header");
  } else {
    // Scrolling Up: Remove the hide class
    header.classList.remove("hide-header");
  }

  // Update the previous scroll position for the next scroll event
  // Use a window property to persist lastScrollTop across function calls
  window.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

// Function to attach or remove the scroll listener based on screen width
function toggleScrollListener() {
  if (window.innerWidth >= 600) {
    // Screen is 600px or wider: Attach the scroll listener
    window.addEventListener("scroll", handleScroll);
    // Initialize lastScrollTop when the listener is attached
    window.lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
  } else {
    // Screen is less than 600px: Remove the scroll listener (if it exists)
    window.removeEventListener("scroll", handleScroll);
    // Ensure the header is visible by removing the hide class if it exists
    header.classList.remove("hide-header");
  }
}

// Initial call to set the correct state on page load
toggleScrollListener();

// Add an event listener to re-evaluate when the window is resized
window.addEventListener("resize", toggleScrollListener);

/* ========================= დამალვადი ჰედერი დესკტოპისათვის (დასასრული) ========================= */
