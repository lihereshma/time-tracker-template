/* Author: Reshma Lihe*/

// Carousel function
$(document).ready (function() {
  $('.customers-slider').slick ({
  dots: true,
  arrows: false
  });  
});

// Tabs section filtering
var tabsName = document.querySelectorAll(".tab a");
var content = document.querySelectorAll(".tab-content li");

var tabArray = Array.from(tabsName);
tabArray.forEach(function(element){
  element.addEventListener('click',function(e){
    var text = e.target.text;
    var currentTab = this;
    console.log(text)
    tabsName.forEach(function(item) {        
      if (item == currentTab) {
        item.parentElement.classList.add("active-tab");
      } 
      else {
        item.parentElement.classList.remove("active-tab");
      }
    });
    content.forEach(function(item) {
      var attr = item.getAttribute("data-attribute");        
      if (text == attr) {
        item.classList.add("active-content");
      } else {
        item.classList.remove("active-content");
      }
    });
  });
});