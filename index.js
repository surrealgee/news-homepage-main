"use strict";

const getNode = (element) => document.getElementById(element);

const openBtn = getNode("open-btn");
const closeBtn = getNode("close-btn");
const nav = getNode("nav");

openBtn.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
