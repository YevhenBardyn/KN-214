$('.main-slider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    fade: false,
    arrows: false,
    draggable: true,
    slidesToShow: 1,
});

AOS.init({
    duration: 1200,
  })
  


  document.addEventListener("DOMContentLoaded", function(event) {

 


    document.getElementById("menu-button").addEventListener("click", myFunction);

function myFunction() {
    if(document.getElementById("menu-container").classList.contains("menu_active")){
        document.getElementById("menu-container").classList.remove("menu_active");
        //document.getElementsByClassName("slider-section")[0].classList.remove("section-active");
    }else{
        document.getElementById("menu-container").classList.add("menu_active");
        //document.getElementsByClassName("slider-section")[0].classList.add("section-active");
    }
} 


document.getElementById("contact-submit").addEventListener("click", formSubmit);
function formSubmit(){
  var email = document.getElementById("EMail");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    alert("Thank You!");
  }else{
    alert("You have entered wrong email");
  }
  
}
document.getElementById("flName").addEventListener("keyup", nameValidation);
function nameValidation(){
  var letters = /^[A-Za-z]+$/;
   if(document.getElementById("flName").value.match(letters)){
    
   }else
   document.getElementById("flName").value= document.getElementById("flName").value.substring(0, document.getElementById("flName").value.length - 1);
}
document.getElementById("switch").addEventListener("change", themeSwitcher)
function themeSwitcher(){
  if(document.getElementsByClassName("menu")[0].classList.contains("menu-night")) document.getElementsByClassName("menu")[0].classList.remove("menu-night");
  else document.getElementsByClassName("menu")[0].classList.add("menu-night");
}

  


});function showLanguages() {
    $(".dropdown-language").toggleClass("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.lang-drpdwn-btn')) {
      var dropdowns = $(".dropdown-language");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }