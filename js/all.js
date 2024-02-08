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


window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > -1) {
    document.querySelector(".nav-home").classList.add("current");
    document.querySelector(".nav-about").classList.remove("current");
    document.querySelector(".nav-project").classList.remove("current");
    document.querySelector(".nav-contact").classList.remove("current");
  }
  if(window.pageYOffset > 890) {
    document.querySelector(".nav-about").classList.add("current");
    document.querySelector(".nav-home").classList.remove("current");
    document.querySelector(".nav-skill").classList.remove("current");
    document.querySelector(".nav-project").classList.remove("current");
    document.querySelector(".nav-contact").classList.remove("current");
  }
  if(window.pageYOffset > 1957) {
    document.querySelector(".nav-skill").classList.add("current");
    document.querySelector(".nav-home").classList.remove("current");
    document.querySelector(".nav-about").classList.remove("current");
    document.querySelector(".nav-project").classList.remove("current");
    document.querySelector(".nav-contact").classList.remove("current");
  }
  if(window.pageYOffset > 2950) {
    document.querySelector(".nav-project").classList.add("current");
    document.querySelector(".nav-home").classList.remove("current");
    document.querySelector(".nav-about").classList.remove("current");
    document.querySelector(".nav-skill").classList.remove("current");
    document.querySelector(".nav-contact").classList.remove("current");
  }

  if(window.pageYOffset > 4100) {
    document.querySelector(".nav-contact").classList.add("current");
    document.querySelector(".nav-home").classList.remove("current");
    document.querySelector(".nav-about").classList.remove("current");
    document.querySelector(".nav-skill").classList.remove("current");
    document.querySelector(".nav-project").classList.remove("current");
  }

  if(window.pageYOffset > 20) {
    document.querySelector("header").classList.add("change-color");
  }
   
  else {
    document.querySelector("header").classList.remove("change-color");
    document.querySelector(".nav-about").classList.remove("current");
    document.querySelector(".nav-skill").classList.remove("current");
  }

});


function calculateAge(date) {
  //split() splits a string into an array of substrings, and returns the array:
  let ageArray = date.split("/");
  //The parseInt method parses a value as a string and returns an integer.
  let ageDay = parseInt(ageArray[0], 10);
  let ageMonth = parseInt(ageArray[1], 10);
  let ageYear = parseInt(ageArray[2], 10);
  // Create a Date object for the birth date
const agePerson = new Date(ageYear, ageMonth - 1, ageDay);
  // Calculate the difference in milliseconds between the birth date and current date
const ageInMs = Date.now() - agePerson.getTime();
  // Convert the age from milliseconds to years
const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  // Round down to the nearest integer
  const age = Math.floor(ageInYears);
  return age;
}
const presentAge = (calculateAge("14/02/1995"));
const htmlCss = (calculateAge("01/01/2018"));
const JavaScript = (calculateAge("01/01/2019"));
const JsLibrary = (calculateAge("01/01/2022"));


document.querySelector('.myInfoAge').innerHTML += presentAge;
document.querySelector('.htmlCss').innerHTML += htmlCss +' Years';
document.querySelector('.InfoCss').innerHTML += htmlCss +' Years';
document.querySelector('.InfoJs').innerHTML += JavaScript +' Years';
document.querySelector('.InfoSass').innerHTML += JavaScript +' Years';
document.querySelector('.InfoWP').innerHTML += JavaScript +' Years';
document.querySelector('.InfoRJS').innerHTML += JsLibrary +' Years';
document.querySelector('.InfoNJS').innerHTML += JsLibrary +' Years';

const sideMenu = document.getElementById('side-nav');
  const close = document.getElementById('close');
  const menu = document.getElementById('hamburger-menu');
  const body = document.getElementById('home');
  const body1 = document.getElementById('about');
  const body2 = document.getElementById('skills');
  const body3 = document.getElementById('portfolio');
  const body4 = document.getElementById('contact');

 
      menu.addEventListener('click',function() {
        sideMenu.classList.add('open');
        close.classList.remove('hide');
      });
      sideMenu.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });
      close.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });

      body.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });
      body1.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });
      body2.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });
      body3.addEventListener('click',function() {
        sideMenu.classList.remove('open');
        close.className = 'hide';
      });
      body4.addEventListener('click',function() {
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
      
      // animation remove slide in
      document.querySelector(".ttl-css").classList.remove("sir-1");
      document.querySelector(".sub-css").classList.remove("sir-2");
      document.querySelector(".dsc-css").classList.remove("sir-2");
      document.querySelector(".exp-css").classList.remove("sir-3");

      // animation add slide in
      document.querySelector(".html").classList.add("skill-active");
      document.querySelector(".ttl-html").classList.add("sir-1");
      document.querySelector(".sub-html").classList.add("sir-2");
      document.querySelector(".dsc-html").classList.add("sir-2");
      document.querySelector(".exp-html").classList.add("sir-3");

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
      
      // animation remove slide in
      document.querySelector(".ttl-html").classList.remove("sir-1");
      document.querySelector(".sub-html").classList.remove("sir-2");
      document.querySelector(".dsc-html").classList.remove("sir-2");
      document.querySelector(".exp-html").classList.remove("sir-3");

      // animation add slide in
      document.querySelector(".css").classList.add("skill-active");
      document.querySelector(".ttl-css").classList.add("sir-1");
      document.querySelector(".sub-css").classList.add("sir-2");
      document.querySelector(".dsc-css").classList.add("sir-2");
      document.querySelector(".exp-css").classList.add("sir-3");
    
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

window.onload = function () {

  

  
  



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
