$(document).ready(function() {

  $('.lightbox').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

  //Source: https://gist.github.com/WebDevBooster/5fb2805fa19f4f9ae0d6bc9e3073e3e9
  $(function() {
    var topoffset = 70; //variable for menu height
    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling

  });

  //Source: https://stackoverflow.com/questions/50172524/bootstrap-4-navbar-active-class
  // $('.navbar-nav .nav-link').click(function(){
  //   $('.navbar-nav .nav-link').removeClass('active');
  //   $(this).addClass('active');
  // });

    function scrollActive(currentId) {
    $('.section-spy').removeClass('active');
    $(currentId).addClass('active');
  }

  $('.nav li').on('activate.bs.scrollspy', function(e) {
    var targetId = $(e.target).find('a').attr('href');
    scrollActive(targetId);

  })

});
