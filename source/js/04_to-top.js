'use strict';

(function() {

  var btnTop = document.getElementById("to-top");

  var movementTop = function(e) {
    e.preventDefault();
    var scroll = window.pageYOffset;
    var targetTop = 0;
    var scrollDiff = (scroll - targetTop) * -1;
    animate({
      duration: 500,
      timing: function(timeFraction) {
        return Math.pow(timeFraction, 4);
      },
      draw: function(progress) {
        var scrollNow = scroll + progress * scrollDiff;
        window.scrollTo(0, scrollNow);
      }
    });
  }

  var visibilityToggle = function() {
    if (window.pageYOffset >= 500) {
      document.getElementById("to-top").classList.add('to-top--visible');
    } else {
      document.getElementById("to-top").classList.remove('to-top--visible');
    }
  }

  var animate = function(ref) {
    var timing = ref.timing,
      draw = ref.draw,
      duration = ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  btnTop.addEventListener('click', movementTop);
  window.addEventListener('scroll', visibilityToggle);
  visibilityToggle();

})();
