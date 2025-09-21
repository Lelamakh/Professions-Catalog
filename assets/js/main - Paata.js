/* - - - - - - - -



START for List page 



- - - - - - - -*/

/* MODAL START */

// Get the modal

/* MODAL END */

/* ეს კოდი არის ძებნის ველისათვის (დასაწყისი) */

// function resetInput() {
//   document.getElementById("mySearchInput").value =
//     document.getElementById("mySearchInput").defaultValue;
// }

/* ეს კოდი არის ძებნის ველისათვის (დასასრული) */

/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასაწყისი) */

/* ეს კოდი არის ღილაკების ფერის შესაცვლელი (დასასრული) */

/* ------------------------------



ეს კოდი არის ანაზღაურების ფილტრისათვის (დასაწისი)



-------------------------------*/

/* 



ეს კოდი არის ანაზღაურების ფილტრისათვის (დასასრული) 



*/

/* 



ეს კოდი არის ბურგერ მენიუსათვის (დასაწყისი) 



*/

/* 



ეს კოდი არის ბურგერ მენიუსათვის (დასასრული) 



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

/* ეს კოდი არის ფავორიტების ველისათვის (დასასრული) */

/* - - - - - - - -



END for List page 



- - - - - - - - */

/* - - - - - - - -



START for index-PDP page 



- - - - - - - - */

/* გალერეა START */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("PS-mySlides");
  let dots = document.getElementsByClassName("PS-demo");
  let captionText = document.getElementById("PS-caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* გალერეა END */

/* - - - - - - - -



END for index-PDP page 



- - - - - - - - */

function scrollWin() {
  window.scrollBy(100, 0);
}
