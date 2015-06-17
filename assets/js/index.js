$(function(){
   console.log("jquery doc rdy");

   //fixa bildtexter margin
   imgTextMargin();
});

imgTextMargin = function(){
   $bildtexter = $('.bild-text');
   $parent = $bildtexter.parent();
   $parent.css("margin-top", "-15px");
   $parent.css("margin-left", "5px");
};
