/*var menuItem = function(name, kCal, pic, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.pic = pic;
    this.gluten = gluten;
    this.lactose = lactose;
};


let NastyBurger = new menuItem("Nasty Burger", "1300 calories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h-DSEvwRwh77HkNEWyFZeINOd-6Pa__2vyxquayflbTmhRC-Iw&s", true, false);


let NiceBurger = new menuItem("Nice Burger", "2000 calories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NamnamBurger = new menuItem("Namnam Burger", "1500 calories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

let NextBurger = new menuItem("Next Burger", "2000 calories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NormalBurger = new menuItem("Normal Burger", "1400 calories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

let row = document.getElementsByClassName("column")
var menu = [NastyBurger, NiceBurger, NamnamBurger, NextBurger, NormalBurger];
*/
/*
for (var x = 0; x<row.length; x++)
{
    let title = document.createElement('h3');
    let nameTitle = document.createTextNode(menu[x].name);
    title.appendChild(nameTitle);
    row[x].appendChild(title);
    
    let img = document.createElement('img');
    img.src = menu[x].pic;
    img.height = 200;
    img.width = 200;
    row[x].appendChild(img);

    let listItem = document.createElement('ul');
    let kcal = document.createElement('li');
    let kcalText = document.createTextNode(menu[x].kCal); 
    let gluten = document.createElement('li');
    let glutenText = document.createTextNode("Contains gluten");
    let lactose = document.createElement('li');
    let lactoseText = document.createTextNode("Contains lactose");

    kcal.appendChild(kcalText);
    listItem.appendChild(kcal);
    if(menu[x].gluten) {
        gluten.appendChild(glutenText);
        listItem.appendChild(gluten);
    }
    if(menu[x].lactose) {
        lactose.appendChild(lactoseText);
        listItem.appendChild(lactose);
    }

    row[x].appendChild(listItem);
    
}
*/

 /*   
let myButton = document.getElementById("button");
myButton.addEventListener ("click", myFunction);


function myFunction () {
    
let Name = document.getElementById("full name").value;
let Email = document.getElementById("email").value;
let Street = document.getElementById("street").value;
let House = document.getElementById("house").value;
let Recipient = document.getElementById("recipient").value;
var Gender;
var radios = document.getElementsByName("gender");
for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
				Gender = radios[i].value;
				break;
		}
}
    console.log("Button Clicked!");
    var Info = [Name, Email, Street, House, Recipient, Gender];
    console.log(Info);
    
    
}
*/

/*var ids = ["b1", "b2", "b3", "b4", "b5"];
for (var x = 0; x < row.length; x++)
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
/*
function calInfo(burger) {
    
    return "burger: " + burger.name + "\nkCal: " + burger.kCal;
};
*/
/*const mat = new Vue({
el: '#myID',
data: {
menu: menu
},

})*/
