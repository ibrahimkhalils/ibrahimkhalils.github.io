console.log("DROPDOWN FIX 5 LOADED");

document.addEventListener("DOMContentLoaded", function () {

  const dropdowns = document.querySelectorAll(".nav-dropdown");

  console.log("Dropdown count:", dropdowns.length);


  // when clicking a dropdown item
  dropdowns.forEach((dropdown) => {

    const trigger = dropdown.querySelector("[data-dropdown-trigger]");

    if (!trigger) return;


    trigger.addEventListener("click", function () {

      // wait for HugoBlox to open it
      setTimeout(() => {

        dropdowns.forEach((other) => {

          if (other !== dropdown) {
            other.classList.remove("active");
          }

        });

      }, 10);

    });

  });


  // click outside closes all
  document.addEventListener("click", function (e) {

    if (!e.target.closest(".nav-dropdown")) {

      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });

    }

  });

});