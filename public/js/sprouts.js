var page_num = 1;

//regular assignment
// $('.more-sprouts').on('click', function(event){
//   event.preventDefault();
//
//   page_num += 1
//   var request = $.ajax({
//     method: "GET",
//     url: "/tweets.json?page=" + page_num
//   });
//
//   request.done(function(data){
//     data.forEach(function(tweet) {
//       $(".tweets").append("<li class= 'tweet'><div class = 'body'>" + tweet["text"] + "</div>\n<div class = 'user'>" + tweet["username"] + "</div></li>");
//     });
//   });
// });


//**extra scrolling assignment**

//code to make it work on larger screens
// $( ".more-sprouts" ).remove();
// if ($(document).height() > 1220) {
//   page_num += 1
//   $("ul").delay(500)
//   var request = $.ajax({
//     method: "GET",
//     url: "/tweets.json?page=" + page_num
//   });
//
//   request.done(function(data){
//     data.forEach(function(tweet) {
//       $(".tweets").append("<li class= 'tweet'><div class = 'body'>" + tweet["text"] + "</div>\n<div class = 'user'>" + tweet["username"] + "</div></li>");
//     });
//   });
// }

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     page_num += 1
     $("ul").delay(500)
     var request = $.ajax({
       method: "GET",
       url: "/tweets.json?page=" + page_num
     });

     request.done(function(data){
       data.forEach(function(tweet) {
         $(".tweets").append("<li class= 'tweet'><div class = 'body'>" + tweet["text"] + "</div>\n<div class = 'user'>" + tweet["username"] + "</div></li>");
       });
     });
   }
});

//access page from href syntax
//$('.more-sprouts').attr("href", "/tweets?page=2")
