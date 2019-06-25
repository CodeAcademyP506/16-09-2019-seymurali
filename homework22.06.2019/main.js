function getStarElement(){

    
}
// HEADER 
var header = document.createElement("div");
document.querySelector("body").append(header);
header.style.width = "100%";
header.style.background = "#343a40";
var headercontent = document.createElement("div");
header.append(headercontent);
headercontent.style.width = "80%";
headercontent.style.margin = "0 auto";
headercontent.style.display = "flex";
headercontent.style.justifyContent = "space-between"
var logo = document.createElement("h1");
headercontent.append(logo);
logo.innerText = "Start Bootstrap"
logo.style.background = "#343a40";
logo.style.color = "#fffff3";
logo.style.fontSize = "27px";
logo.style.margin = "10px";
var menu = document.createElement("div")
headercontent.append(menu);
menu.style.display = "flex";
var menus = [
    {
        name:"Home",
        color:"white",
    },
    {
        name:"About",
        color:"gray",
    },
    {
        name:"Services",
        color:"gray",
    },
    {
        name:"Contact",
        color:"gray",
    },
];

for(var i = 0;i<menus.length;i++){
    var $i = menus[i]

    var headerptag = document.createElement("p");
    headerptag.style.color = $i.color;

    headerptag.innerText = $i.name;

    if(i!=0){    
        headerptag.addEventListener("mouseover", function(){
            this.style.color = "rgb(204, 206, 207)";
        })
        headerptag.addEventListener("mouseout", function(){
            this.style.color = "gray";
        })
    }

    menu.append(headerptag);
    headerptag.style.fontSize = "23px";
    headerptag.style.margin = "10px";
    headerptag.style.cursor = "pointer";

}
// END HEADER
// START MAIN

var main = document.createElement("div")
document.body.append(main)
main.style.width = "100%";
var container = document.createElement("div");
main.append(container);
container.style.width = "80%";
container.style.margin = "0 auto";
container.style.marginTop = "3%";
container.style.display = "flex";
var leftSection = document.createElement("div")
container.append(leftSection)
leftSection.style.width = "24%";
var leftSectionh1 = document.createElement("h1")
leftSection.append(leftSectionh1)
leftSectionh1.innerHTML = "Shop Name";
leftSectionh1.style.fontSize = "50px";
leftSectionh1.style.fontWeight = "bold";
leftSectionh1.style.color = "#212529";
var categroies = document.createElement("div")
leftSection.append(categroies);
categroies.style.display = "flex";
categroies.style.flexDirection = "column";
categroies.style.marginTop = "20%";
categroies.style.border = "1px solid rgba(0,0,0,.125)";
var category = ["Category 1","Category 2","Category 3"];
for(var i=0;i<category.length;i++){
    var categorya = document.createElement("a");
    categroies.append(categorya);
    categorya.setAttribute("href","#")
    categorya.innerHTML = category[i];
    categorya.style.padding = "7%";
    categorya.style.fontSize = "25px";
    categorya.style.color = "#317dff";
    categorya.style.textDecoration = "none";
    categorya.style.borderTop = "1px solid rgba(0,0,0,.125)";
    categorya.addEventListener("mouseover",function(){
        this.style.color = "#0056b3";
        this.style.textDecoration = "underline";
        
    })
    categorya.addEventListener("mouseout",function(){
        this.style.color = "#317dff";
        this.style.textDecoration = "none";
    })
}
var rightSection = document.createElement("div")
container.append(rightSection);
rightSection.style.width = "70%";
rightSection.style.marginLeft = "6%";
rightSection.style.display = "flex";
rightSection.style.flexDirection = "column"
var images = document.createElement("div");
images.style.width = "100%";
images.style.height = "79%";
images.style.border = "1px solid black";
images.style.position = "relative";
images.style.overflow = "hidden";
rightSection.append(images)
images.className="images";
var rightbtn = document.createElement("i")
rightbtn.className = "fas fa-chevron-circle-right"
images.append(rightbtn)
rightbtn.style.position = "absolute"
rightbtn.style.top = "50%"
rightbtn.style.zIndex = "100"
rightbtn.style.right = "3%"
rightbtn.style.cursor = "pointer";
rightbtn.style.fontSize = "30px"
var leftbtn = document.createElement("i")
leftbtn.className = "fas fa-chevron-circle-left"
images.append(leftbtn)
leftbtn.style.position = "absolute"
leftbtn.style.top = "50%"
leftbtn.style.left = "3%"
leftbtn.style.zIndex = "100"
leftbtn.style.cursor = "pointer";
leftbtn.style.fontSize = "30px"
var slideimg = document.createElement("div")
images.append(slideimg)
slideimg.style.display = "flex";
var img = ["img/img1.jpg","img/img2.jpg","img/img3.jpg"]
for(var i=0;i<img.length;i++){
    var picture = document.createElement("img");
    picture.style.width = "100%";
    picture.style.objectFit = "cover";
    picture.src = img[i];
    slideimg.append(picture);
}
var cards = document.createElement("div");
rightSection.append(cards);
cards.style.display = "flex";
cards.style.flexWrap = "wrap";
cards.style.paddingTop = "10%";
for (var i=1;i<=6;i++){
    var card = document.createElement("div");
    card.style.width = "219px";
    card.style.margin = "15px";
    cards.append(card);
    card.style.border = "1px solid black";
    cardimg = document.createElement("img")
    cardimg.style.width = "100%";
    cardimg.src = "img/img4.png"
    card.append(cardimg)
    cardtext = document.createElement("div");
    cardtext.style.borderTop = "1px solid black";
    card.append(cardtext)
    cardtext.style.padding = "5px";
    cardp = document.createElement("p");
    cardtext.append(cardp);
    cardp.style.fontSize = "25px"
    cardp.innerHTML = "Item One"
    cardp.style.color = "#007bff";
    cardp.style.cursor = "pointer";
    cardp2 = document.createElement("p");
    cardp2.style.fontSize = "20px"
    cardp2.style.paddingTop = "7%";
    cardtext.append(cardp2);
    cardp2.innerHTML = "$24.99";
    cardp2.style.fontWeight = "bold";
    cardp3 = document.createElement("p");
    cardtext.append(cardp3);
    cardp3.style.fontSize = "17px"
    cardp3.style.paddingTop = "7%";
    cardp3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    var stars = document.createElement("div");
    stars.style.padding = "12px";
    stars.style.borderTop = "1px solid black";
    stars.style.lineHeight = "21px"
    stars.style.background = "#f7f7f7";
    card.append(stars);
    for(var j=0;j<5;j++){
        star = document.createElement("i");
        stars.append(star)
        star.className = "fas fa-star"
    }
}

var footer = document.createElement("div");
document.body.append(footer);
footer.style.width = "100%";
footer.style.background = "#343a40"
var footertext = document.createElement("h3");
footer.append(footertext)
footertext.innerHTML = "Copyright © Your Website 2019";
footertext.style.textAlign = "center";
footertext.style.color = "white";
footertext.style.padding = "45px";
footertext.style.fontSize = "20px";