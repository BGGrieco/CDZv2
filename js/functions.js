$(document).ready(function()
{
  $(window).scroll(function()
  {
    if ($(window).scrollTop() > 500)
    {
      $("#one").fadeIn(400);
      $("#two").fadeIn(700);
      $("#three").fadeIn(900);
      $("#burgerBackGround").fadeIn(500);
    }
    if ($(window).scrollTop() < 500)
    {
      $("#one").fadeOut(300);
      $("#two").fadeOut(500);
      $("#three").fadeOut(700);
      $("#burgerBackGround").fadeOut(300);

    }
    if ($(window).scrollTop() > 1000)
    {
      $("#topBar").fadeIn(500);
    }
    if ($(window).scrollTop() < 1000)
    {
      $("#topBar").fadeOut(300);
    }
  });

  function handler1()
  {
    $(".barTop").toggleClass("barTopOn");
    $(".barMid").toggleClass("barMidOn");
    $(".barBot").toggleClass("barBotOn");
    $(".blurry").css({"color": "transparent", "text-shadow": "0 0 4px white"});
    $("h1").css({"color": "transparent", "text-shadow": "0 0 7px white"});
    $("img").css("filter", "blur(4px)");
    $("#mobileMenu").css("display", "block");
    $(this).one("click", handler2);
  }

  function handler2()
  {
    $(".barTop").toggleClass("barTopOn");
    $(".barMid").toggleClass("barMidOn");
    $(".barBot").toggleClass("barBotOn");
    $(".blurry").css({"color": "white", "text-shadow": "none"});
    $("h1").css({"color": "white", "text-shadow": "none"});
    $("img").css("filter", "none");
    $("#mobileMenu").css("display", "none");
    $(this).one("click", handler1);
  }

  $(".burgerMenu").one("click", handler1);
  $(".burgerNav").one("click", handler2);
});

var homeSlideIndex = 0;
carouselOne();
function carouselOne()
{
  var i;
  var x = document.getElementsByClassName("homeSlides");
  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  homeSlideIndex++;
  if (homeSlideIndex > x.length)
  {
    homeSlideIndex = 1;
  }
  x[homeSlideIndex-1].style.display = "block";
  setTimeout(carouselOne, 4000);
}

var amenitiesSlideIndex = 0;
carouselTwo();
function carouselTwo()
{
  var i;
  var x = document.getElementsByClassName("serviceSlides");
  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  amenitiesSlideIndex++;
  if (amenitiesSlideIndex > x.length)
  {
    amenitiesSlideIndex = 1;
  }
  x[amenitiesSlideIndex-1].style.display = "block";
  setTimeout(carouselTwo, 4000);
}

/* MAP */
function locatorMap()
{
  var cdz = {lat: 45.463042, lng: 9.184129};
  var map = new google.maps.Map(document.getElementById("mapOne"),
  {
    zoom: 17,
    center: cdz
  });
  marker = new google.maps.Marker
  ({
    map: map,
    position: cdz,
    animation: google.maps.Animation.DROP,
    title: "Casa Dello Zecchiere"
  });
}
