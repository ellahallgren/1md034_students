

var menuItem = function(name, kCal, pic, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.pic = pic;
    this.gluten = gluten;
    this.lactose = lactose;
};

function calInfo(burger) {
    
    return "burger: " + burger.name + "\nkCal: " + burger.kCal;
};


let NastyBurger = new menuItem("Nasty Burger", 1300, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h-DSEvwRwh77HkNEWyFZeINOd-6Pa__2vyxquayflbTmhRC-Iw&s", true, false);

let NiceBurger = new menuItem("Nice Burger", 2000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NamnamBurger = new menuItem("Namnam Burger", 1500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

let NextBurger = new menuItem("Next Burger", 2000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HComNXsGM-7olg6V6kOi8P9Y-YE24NM5tq4CDJOrgm4Uh-hR&s", false, false);

let NormalBurger = new menuItem("Normal Burger", 1400, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_MeDe_E_ww_fV62nDaOxtFk3P09xGSEUXFEf_lHsyzGBG86x&s", true, true);

