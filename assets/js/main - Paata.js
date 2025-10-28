/* XXXXXXXXXXXXXX New HEADER Mobile Menu START XXXXXXXXXXXXXXX */

// const toggleModalBtnMobile = document.getElementById("PS-toggleModalBtn");
// const myModalMobile = document.getElementById("PS-myModal");

// toggleModalBtnMobile.addEventListener("click", () => {
//   myModalMobile.classList.toggle("active");
// });

// // Optional: Close modal by clicking the backdrop
// myModalMobile.addEventListener("click", (e) => {
//   if (e.target === myModalMobile) {
//     myModalMobile.classList.remove("active");
//   }
// });

/* XXXXXXXXXXXXXX New HEADER Mobile Menu END XXXXXXXXXXXXXXX */

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

/* ============ შენთვის საინტერესო კურსები SLIDER START ============ */

document.addEventListener("DOMContentLoaded", () => {
  // Select the necessary elements from the DOM
  const scrollContainer = document.querySelector(".PS-cards");
  const nextBtn = document.querySelector(".PS-next-arrow");
  const prevBtn = document.querySelector(".PS-prev-arrow");

  // Define the scroll amount
  const scrollAmount = 600; // This controls how far the slider moves with each click

  // Add a click event listener to the "next" button
  if (nextBtn && scrollContainer) {
    nextBtn.addEventListener("click", () => {
      // Check if the scroll position is at the end of the content
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft < maxScrollLeft) {
        // Scroll the container to the right by the defined amount
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    });
  }

  // Add a click event listener to the "previous" button
  if (prevBtn && scrollContainer) {
    prevBtn.addEventListener("click", () => {
      // Check if the scroll position is at the beginning of the content
      if (scrollContainer.scrollLeft > 0) {
        // Scroll the container to the left by the defined amount
        scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    });
  }

  // Optional: Hide or show buttons based on scroll position
  // You can implement this logic for a more polished user experience
  //   const updateButtonVisibility = () => {
  //     prevBtn.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
  //     const isAtEnd =
  //       scrollContainer.scrollLeft >=
  //       scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //     nextBtn.style.display = isAtEnd ? "none" : "block";
  //   };

  //   // Run the check on initial load
  //   if (scrollContainer) {
  //     updateButtonVisibility();
  //     // Re-check visibility whenever the user scrolls manually
  //     scrollContainer.addEventListener("scroll", updateButtonVisibility);
  //   }
});

/* ============ შენთვის საინტერესო კურსები SLIDER END ============ */
