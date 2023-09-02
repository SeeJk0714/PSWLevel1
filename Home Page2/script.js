// document.addEventListener("loadstart", function () {
//   let ytb = document.querySelector(".ytp-chrome-top");

//   ytb.style.display = "none";
// });


// function getRandomColor() {
//   var letters = "0123456789ABCDEF".split("");
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// $(function () {
//   $("#page section").each(function (index, element) {
//     $(this).css("background-color", getRandomColor());
//   });

//   // SCROLLER
//   var scroller = (function () {
//     var section_index;
//     var scroll_delay_px_initial = 300;
//     var $window = $(window);
//     var $page = $("#page");
//     var $sections = $page.find("section");
//     var section_height = $window.height();

//     return {
//       init: function () {
//         $page.height($sections.length * $window.height());
//         $sections.each(function (index, element) {
//           var $section = $(this);
//           $section.css({
//             top: $page.height() * index,
//             position: "fixed",
//             "z-index": index
//           });
//           $window.on("scroll", function () {
//             scroll_index = Math.ceil(
//               ($window.scrollTop() - scroll_delay_px_initial) / section_height
//             );
//             //console.clear()
//             //console.log(scroll_index)
//             $sections.each(function (index, element) {
//               var $section = $(this);
//               var section_index = $section.data("index");
//               if (section_index <= scroll_index) {
//                 $section.css({
//                   top: 0
//                 });
//               } else {
//                 $section.css({
//                   top: $(window).height()
//                 });
//               }
//             });
//           });
//         });
//       }
//     };
//   })();

//   scroller.init();
// });
