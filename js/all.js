$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });


  function SendEmail(name, from, proj, inquiry) {
    Email.send({
      SecureToken : "eb324792-5e17-4a3e-a959-f24cf793b6ac",
      To : from,
      From : 'maruelle08@gmail.com',
      Subject : "email from maruelle-gulfan.github.io",
      Body : "Name: "+name+"\n"+"Email:"+from+"\n"+"Project:"+proj +"\n"+"Message:"+inquiry,
    }).then(
        message => {
            if (message !== "OK") {
                alert(message)
            }
            else {
                alert("Your inquiry has been submitted. Thank you!")
            }
        }
    );
}

var emailForm = document.getElementById('email1')
emailForm.addEventListener('submit', event => {

    event.preventDefault()
    var name = event.target[0].value
    var from = event.target[1].value
    var proj = event.target[2].value
    var inquiry = event.target[3].value

    SendEmail(name, from, proj, inquiry )
})

