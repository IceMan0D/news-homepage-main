let img = document.querySelector(".open-menu");
let menu = document.querySelector(".menu");

// img.addEventListener("click", () => {
//   let imgSrc = img.src;
//   let openUrl = "./assets/images/icon-menu.svg";
//   let closeUrl = "./assets/images/icon-menu-close.svg";
//   if (imgSrc === openUrl) {
//     img.src = closeUrl;
//     menu.classList.remove("menuright");
//   } else {
//     img.src = openUrl;
//     menu.classList.add("menuright");
//   }
// });

// img.addEventListener("click", () => {
//   let openUrl = "./assets/images/icon-menu.svg";
//   let closeUrl = "./assets/images/icon-menu-close.svg";
//   console.log(img.src);
//   console.log(openUrl);
//   if (img.src === openUrl) {
//     img.src = closeUrl; // Update the img's src attribute
//     menu.classList.remove("menuright");
//   } else {
//     img.src = openUrl; // Update the img's src attribute
//     menu.classList.add("menuright");
//   }
//   console.log(img.src == openUrl);
// });

img.addEventListener("click", () => {
  let openUrl = "./assets/images/icon-menu.svg";
  let closeUrl = "./assets/images/icon-menu-close.svg";
  if (img.src.endsWith("icon-menu.svg")) {
    img.src = closeUrl;
    img.classList.add("fix-icon");
    menu.classList.add("menuright");
  } else {
    img.src = openUrl;
    img.classList.remove("fix-icon");
    menu.classList.remove("menuright");
  }
});
