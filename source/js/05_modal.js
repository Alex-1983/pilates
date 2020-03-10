'use strict';

(function() {

  var ESC_KEYCODE = 27;
  var modal = document.querySelector(".modal");
  var btnOpen = document.querySelectorAll(".btn-link--card");
  var btnClose = modal.querySelector(".popup-record__close");
  var overlay = document.querySelector(".overlay");
  var body = document.querySelector("body");
  var mapClassAdd = "modal--open";
  var overlayShow = "overlay-show";
  var modalNoScroll = "modal-no-scroll";

  var onKeydown = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      onCloseModal(evt);
    }
  };

  var onCloseModal = function(evt) {
    evt.preventDefault();
    modal.classList.remove(mapClassAdd);
    overlay.classList.remove(overlayShow);
    body.classList.remove(modalNoScroll);
    document.removeEventListener('keydown', onKeydown);
  };

  var onClickBtnOpen = function(evt) {
    evt.preventDefault();
    modal.classList.add(mapClassAdd);
    overlay.classList.add(overlayShow);
    body.classList.add(modalNoScroll);
    overlay.addEventListener('click', onCloseModal);
    document.addEventListener('keydown', onKeydown);
  };


  for (var i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', onClickBtnOpen);
  }

  btnClose.addEventListener('click', onCloseModal);

})();
