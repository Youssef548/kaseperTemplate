// Start for menu bar
let menu = document.querySelector("header nav .toggle-menu");
let mobile_menu = document.querySelector(" header nav .toggle-menu +  ul");
let mobileItems = document.querySelectorAll(
  " header nav .toggle-menu + ul li a"
);

menu.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
});

mobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobile_menu.classList.toggle("active");
  });
});
// End for menu bar

// Start on click btn portfolio

// let list = document.getElementById("nav").children[0];

// for (let i = 0; i < list.children.length; i++) {
//   let el = list.children[i];
//   el.addEventListener("click", () => {
//     el.classList.toggle("active");
//   });
// }

// End on click btn portfolio
// Start Filter
const list = document.querySelectorAll(".port-container .text ul li ");
const box = document.querySelectorAll(".port-container .img-container .box");

list.forEach((ele) =>
  ele.addEventListener("click", () => {
    list.forEach((ele) => ele.classList.remove("active"));
    ele.classList.add("active");
    // Start Filter

    let data_filter = ele.getAttribute("data-filter");
    box.forEach((item) => {
      item.classList.add("hide");

      if (
        item.getAttribute("data-item") == data_filter ||
        data_filter == "all"
      ) {
        item.classList.remove("hide");
      }
    });
  })
);
