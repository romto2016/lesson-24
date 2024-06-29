let productCountEl = document.getElementById("product-count");
let addToCardBtns = document.querySelectorAll(".button-section-cart");
// console.log(productCountEl);
// console.log(addToCardBtns);

addToCardBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    // console.log("clicked");
    // document.getElementById("product-count").innerHTML++;
    productCountEl.textContent = +productCountEl.textContent + 1;
  })
);
// ===========================================================
let pressBtn = document.querySelectorAll(".heart-button");
console.log(pressBtn);
// for (i = 0; i < pressBtn.length; i++) {
//   pressBtn[i].addEventListener("click", function () {
//     //     // console.log("clicked");
//     console.log("liked");
//   });
// }
pressBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
    } else {
      btn.classList.add("liked");
    }
    // btn.classList.toggle("liked");
    // console.log("licked");
  })
);

// const btn2 = document.querySelectorAll(".header-button");
// btn2.disabled = true;

// btn2.forEach((btn2) =>
//   btn2.addEventListener("click", function () {
//     btn2.disabled = false;
//   })
// );
// btn2.addEventListener("change", btn2);
// const decrementBtns = document.querySelectorAll(".decrement-button")[0];
// const incrementBtns = document.querySelectorAll(".increment-button")[0];
// const inputFields = document.querySelectorAll(".product-quantity input")[0];

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(inputFields);

// currentValue = +inputFields.value;
// toggleDisabledState(currentValue);

// function toggleDisabledState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// }
// incrementBtns.addEventListener("click", function () {
//   let currentValue = +inputFields.value;
//   let newValue = currentValue + 1;
//   inputFields.value = newValue;
//   countDisabledState(newValue);
// });
// decrementBtns.addEventListener("click", function () {
//   let currentValue = +inputFields.value;
//   newValue = currentValue - 1;
//   inputFields.value = newValue;
//   countDisabledState(newValue);
// });
// add slider

// $(".slider-wrapper").slick({
//   adaptiveHeigth: true,
//   dots: true,
// });
// let moreDetailsButtons = document.querySelectorAll(".button-section-details");
// const modal = document.querySelector(".modal");
// console.log(moreDetailsButtons);
// console.log(modal);
// moreDetailsButtons.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     // modal.style.display = "block";
//     modal.classList.add("show");
//   })
// );

// const btnClose = document.querySelector(".btn-close");
// console.log(btnClose);
// btnClose.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     btnClose.style.display = "none";
//   })
// );
