var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}

window.onload = function () {

  




  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > -1) {
      document.querySelector(".nav-home").classList.add("current");
      document.querySelector(".nav-about").classList.remove("current");
      document.querySelector(".nav-project").classList.remove("current");
    }
    if(window.pageYOffset > 890) {
      document.querySelector(".nav-about").classList.add("current");
      document.querySelector(".nav-home").classList.remove("current");
      document.querySelector(".nav-skill").classList.remove("current");
      document.querySelector(".nav-project").classList.remove("current");
    }
    if(window.pageYOffset > 1957) {
      document.querySelector(".nav-skill").classList.add("current");
      document.querySelector(".nav-home").classList.remove("current");
      document.querySelector(".nav-about").classList.remove("current");
      document.querySelector(".nav-project").classList.remove("current");
    }
    if(window.pageYOffset > 2950) {
      document.querySelector(".nav-project").classList.add("current");
      document.querySelector(".nav-home").classList.remove("current");
      document.querySelector(".nav-about").classList.remove("current");
      document.querySelector(".nav-skill").classList.remove("current");
    }
    if(window.pageYOffset > 20) {
      document.querySelector("header").classList.add("change-color");
    }
     
    else {
      document.querySelector("header").classList.remove("change-color");
      document.querySelector(".nav-about").classList.remove("current");
      document.querySelector(".nav-skill").classList.remove("current");
    }

    // const menu_btn = document.querySelector('.hamburger');
    // const mobile_menu = document.querySelector('.mobile-nav')

    // menu_btn.addEventListener('click', function() {
    //   menu_btn.classList.toggle('is-active');
    //   mobile_menu.classList.toggle('is-active');
    // });


    
    
  });


  const sideMenu = document.getElementById('side-nav');
    const close = document.getElementById('close');
    const menu = document.getElementById('hamburger-menu');
      menu.addEventListener('click',function() {
        sideMenu.className = 'open';
        close.classList.remove('hide');
      });
      close.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });

  

  document.querySelector(".html").classList.add("skill-active");

  document.getElementById("hexagon").addEventListener("click", function () {
    if (this.classList.contains("hex-html")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".html").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon2").addEventListener("click", function () {
    if (this.classList.contains("hex-css")) {
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".css").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon3").addEventListener("click", function () {
    if (this.classList.contains("hex-react")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".react").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon4").addEventListener("click", function () {
    if (this.classList.contains("hex-js")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".js").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon5").addEventListener("click", function () {
    if (this.classList.contains("hex-node")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".node").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon6").addEventListener("click", function () {
    if (this.classList.contains("hex-wp")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".wp").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon7").addEventListener("click", function () {
    if (this.classList.contains("hex-sass")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");

      document.querySelector(".sass").classList.add("skill-active");
    }
  });



  //FLIPBOOK 
  // var numPanels = $('.panel').length;

// if a panel is open, lower its z-idx
// otherwise, set zIdx back to original
// function checkZ($aPanel) {
//   if ( $aPanel.hasClass('open') ) {
//     $aPanel.css('z-index','1');
//   } else {
//     // set z-index back to original stored in data
//     zIdx = $aPanel.data('zIdx');
//     $aPanel.css( 'z-index', zIdx );
//   }
// }

// // loop through all panels and reverse sort via zIdx
// for (i=0; i<(numPanels); i++  ) {
//   var zIdx =  numPanels-i;
//   $('.panel').eq(i).css('z-index',zIdx).data('zIdx',zIdx);
// }

// // when clicking the front panel add class 'open' to panel
// // if clicking bacl panel, remove 'open' from panel
// $('.panel').on('click', '.front, .back', function() {
//   $(this).parent('.panel').toggleClass('open');
//   checkZ($(this).parent('.panel'));
// });

};
