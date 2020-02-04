var menuItem = function(name, kCal, pic, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.pic = pic;
    this.gluten = gluten;
    this.lactose = lactose;
};


let NastyBurger = new menuItem("Nasty Burger", 1300, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h-DSEvwRwh77HkNEWyFZeINOd-6Pa__2vyxquayflbTmhRC-Iw&s", true, false);


let NiceBurger = new menuItem("Nice Burger", 2000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NamnamBurger = new menuItem("Namnam Burger", 1500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

let NextBurger = new menuItem("Next Burger", 2000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NormalBurger = new menuItem("Normal Burger", 1400, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

var menu = [NastyBurger, NiceBurger, NamnamBurger, NextBurger, NormalBurger];
/*var ids = ["b1", "b2", "b3", "b4", "b5"];
for (var x = 0; x < 5; x++)
{
	document.getElementById(ids[x]).innerHTML = menu[x].name;
  if(menu[x].lactose == true) {
  let id = document.getElementById(ids[x]);
  let btn = document.createElement("p");
  let txt = document.createTextNode("Contains lactose");
  btn.appendChild(txt);
  id.appendChild(btn);
  }
  if(menu[x].gluten == true) {
  let id = document.getElementById(ids[x]);
  let btn = document.createElement('p'); 
  let txt = document.createTextNode("Contains gluten");
  btn.appendChild(txt);
  id.appendChild(btn);
  }

}*/


/*document.getElementById("b1").innerHTML = NastyBurger.name;
document.getElementById("b2").innerHTML = NiceBurger.name;
document.getElementById("b3").innerHTML = NamnamBurger.name;
document.getElementById("b4").innerHTML = NextBurger.name;
document.getElementById("b5").innerHTML = NormalBurger.name;
*/
function calInfo(burger) {
    
    return "burger: " + burger.name + "\nkCal: " + burger.kCal;
};

const mat = new Vue({
el: '#myID',
data: {
menu: menu
},

})
