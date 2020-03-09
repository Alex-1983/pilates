'use strict';

(function() {
  var openMenuBtn = document.querySelector(".burger");
  var closeMenuBtn = document.querySelector(".close");
  var openMenu = document.querySelector(".main-header__navigation");
  var links = document.querySelectorAll(".main-nav__link");
  var openMenuClassName = "main-nav-open";

  var onOpenMenuBtnClick = function() {
    openMenu.classList.add(openMenuClassName);
  };

  var onCloseMenuBtnClick = function() {
    openMenu.classList.remove(openMenuClassName);
  };

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onCloseMenuBtnClick);
  }


  openMenuBtn.addEventListener("click", onOpenMenuBtnClick);
  closeMenuBtn.addEventListener("click", onCloseMenuBtnClick);

})();
