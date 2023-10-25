//FUNCTIONS TO SWITCH BETWEEN SCREENS
// hide all screens first, then show a specific screen & hide all other screens
// also update nav menu to highlight current screen
function showScreen1() {
    $(".screen").hide();
    $("#screen1").show();
    $(".menu").removeClass("active");
    $(".menu").eq(0).addClass("active"); // eq(0) = 1st menu item
  }
  
  function showScreen2() {
    $(".screen").hide();
    $("#screen2").show();
    $(".menu").removeClass("active");
    $(".menu").eq(1).addClass("active"); // eq(1) = 2nd menu item
  }
  
  function showScreen3() {
    $(".screen").hide();
    $("#screen3").show();
    $(".menu").removeClass("active");
    $(".menu").eq(2).addClass("active"); // eq(2) = 3rd menu item
  }
  
  function showScreen4() {
    $(".screen").hide();
    $("#screen4").show();
    $(".menu").removeClass("active");
    $(".menu").eq(3).addClass("active"); // eq(3) = 4th menu item
  }
  
  