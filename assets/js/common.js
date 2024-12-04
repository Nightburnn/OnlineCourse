// dropnav starts
function showDropnav(targetId) {
  document.querySelectorAll(".dropnav").forEach((dropnav) => {
    dropnav.style.display = "none";
  });

  const targetDropdown = document.getElementById(targetId);
  if (targetDropdown) {
    targetDropdown.style.display = "block";
  }
}
document.querySelectorAll(".bottomnav__item").forEach((item) => {
  item.addEventListener("mouseover", function () {
    const targetId = this.getAttribute("data-target");
    showDropnav(targetId);
  });
});

document.querySelectorAll(".dropnav").forEach((dropnav) => {
  dropnav.addEventListener("mouseover", function () {
    this.style.display = "block";
  });
  dropnav.addEventListener("mouseleave", function () {
    this.style.display = "none";
  });
});
document
  .querySelector(".bottomnav")
  .addEventListener("mouseleave", function () {
    document.querySelectorAll(".dropnav").forEach((dropnav) => {
      dropnav.style.display = "none";
    });
  });
// dropnav ends

// offcanvas overlay starts
const menuDevelopment = document.getElementById("menuDevelopment");
const menuBusiness = document.getElementById("menuBusiness");
const menuAccounting = document.getElementById("menuAccounting");
const menuIT = document.getElementById("menuIT");
const menuDesign = document.getElementById("menuDesign");
const menuMarketing = document.getElementById("menuMarketing");
const menuHealth = document.getElementById("menuHealth");
const menuMusic = document.getElementById("menuMusic");
const menuOffice = document.getElementById("menuOffice");
const overlayMenu = document.getElementById("overlayMenu");
const developmentMenu = document.getElementById("developmentMenu");
const businessMenu = document.getElementById("businessMenu");
const accountingMenu = document.getElementById("accountingMenu");
const itMenu = document.getElementById("itMenu");
const designMenu = document.getElementById("designMenu");
const marketingMenu = document.getElementById("marketingMenu");
const healthMenu = document.getElementById("healthMenu");
const musicMenu = document.getElementById("musicMenu");
const officeMenu = document.getElementById("officeMenu");
const backButton = document.getElementById("backButton");
const offcanvasElement = document.getElementById("offcanvas1");
const offcanvasButton = document.querySelector(".offcanvas-btn");
function removeBackdropShowClass() {
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("show");
  }
}

offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
  overlayMenu.style.left = "100%";
  removeBackdropShowClass();
});

offcanvasElement.addEventListener("shown.bs.offcanvas", () => {
  if (offcanvasButton) {
    offcanvasButton.style.transform = "scale(1)";
  }
});

offcanvasButton.addEventListener("click", () => {
  offcanvasButton.style.transform = "scale(0)";
});

offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
  if (offcanvasButton) {
    offcanvasButton.style.transform = "scale(0)";
  }
});
function showMenu(menu) {
  if (!overlayMenu || !menu) return;
  [
    developmentMenu,
    businessMenu,
    accountingMenu,
    itMenu,
    designMenu,
    marketingMenu,
    healthMenu,
    musicMenu,
    officeMenu,
  ].forEach((el) => {
    if (el) el.style.display = "none";
  });

  menu.style.display = "flex";

  overlayMenu.style.left = "0";
}

if (menuDevelopment)
  menuDevelopment.addEventListener("click", () => {
    showMenu(developmentMenu);
  });

if (menuBusiness)
  menuBusiness.addEventListener("click", () => {
    showMenu(businessMenu);
  });

if (menuAccounting)
  menuAccounting.addEventListener("click", () => {
    showMenu(accountingMenu);
  });

if (menuIT)
  menuIT.addEventListener("click", () => {
    showMenu(itMenu);
  });

if (menuDesign)
  menuDesign.addEventListener("click", () => {
    showMenu(designMenu);
  });

if (menuMarketing)
  menuMarketing.addEventListener("click", () => {
    showMenu(marketingMenu);
  });

if (menuHealth)
  menuHealth.addEventListener("click", () => {
    showMenu(healthMenu);
  });

if (menuMusic)
  menuMusic.addEventListener("click", () => {
    showMenu(musicMenu);
  });

if (menuOffice)
  menuOffice.addEventListener("click", () => {
    showMenu(officeMenu);
  });

if (backButton)
  backButton.addEventListener("click", () => {
    if (overlayMenu) overlayMenu.style.left = "100%";
  });
// offcanvas overlay ends

// automatic year update in footer starts
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
// automatic year update in footer ends

// search overlay starts
const searchIcon = document.getElementById("search");
const closeSearch = document.getElementById("closeSearch");
const mainContent = document.getElementById("main");
const searchOverlay = document.getElementById("searchOverlay");
searchIcon.addEventListener("click", () => {
  mainContent.style.display = "none";
  searchOverlay.style.display = "block";
});

closeSearch.addEventListener("click", () => {
  searchOverlay.style.display = "none";
  mainContent.style.display = "block";
});
// search overlay ends

// slick-slider starts
$(document).ready(function () {
  $(".slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slick2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// slick slider ends

// show more start
document.getElementById("toggleButton").addEventListener("click", function () {
  var moreText = document.getElementById("more");
  var button = this;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    button.innerHTML =
      'Show Less <img src="./assets/images/icons/arrow-down.svg" alt=""  class="arrow-up">';
  } else {
    moreText.style.display = "none";
    button.innerHTML =
      'Show More <img src="./assets/images/icons/arrow-down.svg" alt="">';
  }
});

document.getElementById("toggleButton2").addEventListener("click", function () {
  var moreText2 = document.getElementById("more2");
  var button2 = this;

  if (moreText2.style.display === "none") {
    moreText2.style.display = "block";
    button2.innerHTML =
      'Show Less <img src="./assets/images/icons/arrow-down.svg" alt=""  class="arrow-up">';
  } else {
    moreText2.style.display = "none";
    button2.innerHTML =
      'Show More <img src="./assets/images/icons/arrow-down.svg" alt="">';
  }
});
// show more ends

// collapse arrow rotate starts
document.querySelectorAll(".collapse").forEach(function (collapse) {
  collapse.addEventListener("show.bs.collapse", function () {
    let arrow = this.previousElementSibling.querySelector(".collapse-arrow");
    arrow.style.transform = "rotate(180deg)";
  });

  collapse.addEventListener("hide.bs.collapse", function () {
    let arrow = this.previousElementSibling.querySelector(".collapse-arrow");
    arrow.style.transform = "rotate(0deg)";
  });
});
// collapse arrow rotate ends

// show more collapse starts
document
  .getElementById("showMoreCollapses")
  .addEventListener("click", function () {
    var moreCollapses = document.getElementById("moreCollapses");
    var button2 = this;

    if (moreCollapses.style.display === "none") {
      moreCollapses.style.display = "block";
      button2.innerHTML = "Show Less";
    } else {
      moreCollapses.style.display = "none";
       button2.innerHTML = "2 more sections";
    }
  });
// show more collapse ends

