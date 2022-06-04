$(".single-category").click(function () {
  $(".single-category").removeClass("active");
  $(this).addClass("active");
});

// Custom dropdown
$(".location, .location-main-icon").click(function () {
  // if($('#findLocation').is(':focus')){
  //     console.log(123);
  // }
});
$(".location .dropdown-item").click(function () {
  $("#findLocation").val(
    this.childNodes[1].children[1].outerText +
      ", " +
      this.childNodes[1].children[2].outerText
  );
  // $('.location-main-icon').attr('src', './assets/images/location-main-icon.svg');
});
$("#locationDropdownBtn").on("shown.bs.dropdown", function () {
  $(".location-main-icon")
    .attr("src", "./assets/images/close-icon.svg")
    .css({ opacity: ".25" });
});
$("#locationDropdownBtn").on("hidden.bs.dropdown", function () {
  $(".location-main-icon")
    .attr("src", "./assets/images/location-main-icon.svg")
    .css({ opacity: "1" });
});

$(".minus").on("click", function () {
  let val = $(this).siblings(".value").val();
  console.log(val--);
  if (val > 0) {
    $(this)
      .siblings(".value")
      .attr("value", val--);
    $(this).css("opacity", ".5");
  }
});

$(".plus").on("click", function () {
  let val = $(this).siblings(".value").val();
  console.log(val++);
  $(this)
    .siblings(".value")
    .attr("value", val--);
});

$(".search-btn").mouseenter(function () {
  this.children[1].innerText = "Browse 532 Listings";
});

$(".search-btn").mouseleave(function () {
  this.children[1].innerText = "Search";
});

// Top destinations carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="top-destinations-arrow">
    <path d="M6.86719 11.2261L2.83385 7.53061L6.86719 3.83447" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.99998 7.53037L20 7.53037" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="top-destinations-arrow">
    <path d="M15.5312 3.49749L19.5646 7.19302L15.5312 10.8892" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3985 7.19327L2.39844 7.19327" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  ],
  navContainer: ".top-destinations-nav",
  items:3.9,
  center: true,
  onInitialized : function(){
    if($('.owl-item').first().hasClass('active'))
        $('.owl-prev').hide();
    else
        $('.owl-prev').show();
    } 
});
