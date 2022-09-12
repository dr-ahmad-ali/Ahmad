$(document).ready(function(){ 
    var projectsList = $('ul.projects-list');
    $('nav').on('click','a',function(){
       var contentId = $(this).attr('href');
       if(contentId==='#projects'){
          projectsList.slideToggle(300);
       } else {
          $('.tabContent').fadeOut(0);
          $(contentId).fadeIn(300);
       }
   });
});
