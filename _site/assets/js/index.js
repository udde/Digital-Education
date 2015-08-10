$(function(){
   console.log("jquery doc rdy");

   //Fixa margin när headern ska bli fixed när man skrollar
   var headerHeight = $( window ).height() - 56.5;
   $header = $('#header');
   banner = $('.banner');
   console.log("window: " + $( window ).height());
   console.log("banner: " + banner.height());
   console.log("header: " + $header.height());
   $content = $('.page-content');

   // $(window).scroll( function () {
   //    // console.log("header: " + $header.height());
   //    // console.log("banner: " + banner.height());
   //    // console.log(banner.height() - $header.height());
   //    if($(window).scrollTop() > banner.height() - $header.height()) {
   //       $header.addClass('header-scrolled');
   //       // $content.addClass('fixed-header-margin');
   //    }
   //    else {
   //       $header.removeClass('header-scrolled');
   //       // $content.removeClass('fixed-header-margin');
   //    }
   // });

   setActiveNavItem();

   //fixa bildtexter margin
   imgTextMargin();
});

imgTextMargin = function(){
   $bildtexter = $('.bild-text');
   $parent = $bildtexter.parent();
   $parent.css("margin-top", "-15px");
   $parent.css("margin-left", "5px");
};

setActiveNavItem = function(){
      var url = window.location.href;

        // passes on every "a" tag
        $("#header a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).addClass("nav-item-active");
            }
        });
}
