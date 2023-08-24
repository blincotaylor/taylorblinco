"use strict";

// TODO: ADD ABILITY TO CLOSE MENU WHEN CLICK OUTSIDE OF NAV

const Navigation = document.querySelector(".navigation");
const NavToggle = document.querySelector(".navigation-toggle");

NavToggle.addEventListener("click", () => {
  const Visibility = Navigation.getAttribute("data-visible");
  if (Visibility === "false") {
    Navigation.setAttribute("data-visible", true);
    NavToggle.setAttribute("aria-expanded", true);
  } else if (Visibility === "true") {
    Navigation.setAttribute("data-visible", false);
    NavToggle.setAttribute("aria-expanded", false);
  }
});

const Links = document.querySelectorAll(".navigation__link");

function linkAdd() {
  for (let i = 0; i < Links.length; i++) {
    Links[i].classList.toggle("hoverstate");
  }
}

function linkRemove() {
  for (let i = 0; i < Links.length; i++) {
    Links[i].classList.remove("hoverstate");
  }
}

Links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    linkAdd();
  });
});

Links.forEach((link) => {
  link.addEventListener("mouseout", () => {
    linkRemove();
  });
});

Links.forEach((link) => {
  link.addEventListener("click", () => {
    Navigation.setAttribute("data-visible", false);
    NavToggle.setAttribute("aria-expanded", false);
  });
});

// Links.addEventListener("mouseover", () => {
//   Links.forEach((link) => {
//     link.classList.add("hoverstate");
//   });
// });

// addEventListener("mouseover", () => {
//   Links.forEach((link) => {
//     link.classList.add("hoverstate");
//   });
// });

// Links.addEventListener("mouseleave", () => {
//   links.classList.remove("hoverstate");
// });
