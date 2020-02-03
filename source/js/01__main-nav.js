'use strict';

(function() {
  var openMenuBtn = document.querySelector(".burger");
  var closeMenuBtn = document.querySelector(".close");
  var openMenu = document.querySelector(".main-header__navigation");
  var openMenuClassName = "main-nav-open";

  var onOpenMenuBtnClick = function() {
    openMenu.classList.add(openMenuClassName);
  };

  var onCloseMenuBtnClick = function() {
    openMenu.classList.remove(openMenuClassName);
  };

  openMenuBtn.addEventListener("click", onOpenMenuBtnClick);
  closeMenuBtn.addEventListener("click", onCloseMenuBtnClick);

})();
