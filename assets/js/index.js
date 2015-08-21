$(function(){
   // console.log("jquery doc rdy");

   //Fixa margin när headern ska bli fixed när man skrollar
   var headerHeight = $( window ).height() - 56.5;
   $header = $('#header');
   banner = $('.banner');
   // console.log("window: " + $( window ).height());
   // console.log("banner: " + banner.height());
   // console.log("header: " + $header.height());
   $content = $('.page-content');

   $ci = $('.contact-img');
   w = $ci.width();
   // console.log("w: " + w);
   h = w*0.46444;
   // console.log("h: " + h);
   // $ci.css('height', h);

   d = new Date();
   // console.log(d.getFullYear());
   $('#copy-year').append(d.getFullYear());

   $test = $('#test');

   filter = [];
   //fill this map on load form existing items
   map = {
      // swe: 'Svenska',
      // math: 'Matematik',
      // middle: 'Mellanstadiet'
   };
   $section = $('#rec-sec');
   itemsMap = [];
   $('.recommendation-media-object').each(function(){
      var tmp = [];
      // console.log($(this));
      $(this).find('.category-link').each(function(){
         tmp.push($(this).attr("data-categories"));
      });
      itemsMap.push(
         {
            item: $(this),
            categories: tmp
         }
      );
   });



   // console.log("mappen: ");
   // console.log(itemsMap);
   $l = $('.category-link');
   $l.each(function(index){
      // console.log(index);
      // console.log($(this).html());
      map[$(this).attr("data-categories")] = $(this).html();
      // console.log(map);
      $(this).click(function(){
         // console.log("HEJ");
         var x = $(this).attr("data-categories");
         if(filter.indexOf(x) == -1){
            filter.push(x);
         }
         // else{
         //    filter.splice(filter.indexOf(x),1);
         // }
         printFilter(filter);
         printItems();

         // console.log();
         // console.log(filter.indexOf("math"));
      });
   });
   $r = $('.recommendation-media-object');
   $r.each(function(index){
      // if($r.data-categories == 'math')
      // console.log(index + $r.attr("data-catgories"));
   });
   $test.click(function(){
      printFilter(filter);
   });
});
printItems = function(){
   $section.empty();
   for (var i = 0; i < itemsMap.length; i++) {
      var valid = false;
      if(filter.length < 1){
         valid = true;
      }
      else{
         for (var j = 0; j < itemsMap[i].categories.length; j++) {
            if(filter.indexOf(itemsMap[i].categories[j]) != -1 ){
               valid = true;
            }
         }
      }
      if(valid){
         $section.append(itemsMap[i].item);
         valid = false;
      }
   }
   $l.each(function(index){
      $(this).click(function(){
         // console.log("HEJ");
         var x = $(this).attr("data-categories");
         if(filter.indexOf(x) == -1){
            filter.push(x);
         }
         printFilter(filter);
         printItems();
      });
   });
};
printFilter = function(){
   // console.log("print filter");
   $ul = $('.filter>ul');
   $ul.empty();
   if(filter.length > 0){
      $('.filter').parent().removeClass("invisible");
      for (var i = 0; i < filter.length; i++) {
         $ul.append('<li><a class="category-link '+filter[i]+'-link" data-categories='+filter[i]+'>'+map[filter[i]]+'<i class="fa fa-times"></i></a></li>');
      }
      $('.filter>ul>li>a').each(function(){
         $(this).click(function(){
            filter.splice(filter.indexOf($(this).attr("data-categories")),1);
            printFilter();
            printItems();
         });
      });
   }
   else{
      $('.filter').parent().addClass("invisible");
   }
};
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
};
// prepareFilter = function(f){
//    $('.filter>ul>li>a').each(function(){
//       $(this).click(function(){
//          console.log("öh");
//          console.log(f);
//          console.log($(this).attr("data-categories"));
//
//          f.splice(f.indexOf($(this).attr("data-categories")),1);
//          console.log(filter);
//          // prepareFilter(f);
//          printFilter(f);
//          return f;
//       });
//    });
// };
