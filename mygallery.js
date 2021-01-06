var galleryImages = document.querySelectorAll(".gallery-img");
var getLatestOpenedImg;
// This will return the width of the viewport
var windowWidth = window.innerWidth;
if(galleryImages) {
    //imamo sliku
    galleryImages.forEach(function(image, index) {
    image.onclick = function() {
        //uzimam sve stilove u CSS fajlu
        var getElementsCss = window.getComputedStyle(image);
        var getFullImgUrl = getElementsCss.getPropertyValue("background-image");
        var getImgUrlPos = getFullImgUrl.split("/myGallery/img/");
        var setNewUrl = getImgUrlPos[1].replace('")','');
        //alert(setNewUrl);

        getLatestOpenedImg = index + 1;

        var popupImg = document.body; //kreiramo popup unutar body-ja
        var newImgWindow = document.createElement("div");
        popupImg.appendChild(newImgWindow);//dodaj div u popup
        newImgWindow.setAttribute("class", "img-window");//klasa i njeno ime
        newImgWindow.setAttribute("onclick", "closeImg()");//metoda i njeno ime

        var newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);//dodaje img u popup
        newImg.setAttribute("src", "./myGallery/img/" + setNewUrl);
        newImg.setAttribute("id", "current-img");
        //Gde ce slika biti ucitana?
        newImg.onload = function() {
            //Buttons
            var newNextBtn = document.createElement("a");
            var btnNextText = document.createTextNode(">");
            newNextBtn.appendChild(btnNextText);
            popupImg.appendChild(newNextBtn);
            newNextBtn.setAttribute("class", "img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg(1)");
            newNextBtn.style.cssText = "right:" + "420" + "px;";

            var newPrevBtn = document.createElement("a");
            var btnPrevText = document.createTextNode("<");
            newPrevBtn.appendChild(btnPrevText);
            popupImg.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class", "img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg(0)");
            newPrevBtn.style.cssText = "left:" + "440" + "px;";
        }
    }
    });
}
function closeImg() {
    document.querySelector(".img-window").remove();//neutralisem klasu
    document.querySelector(".img-btn-prev").remove();
    document.querySelector(".img-btn-next").remove();
}
function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    var getImgWindow = document.querySelector(".img-window");
    var newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    var calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        //ako dodjemo do poslednje slike
        if(calcNewImg === 5) {
            calcNewImg = 1; //prva slika
        }
    } else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        //ako je ucitana prva slika i kliknemo Prev
        if(calcNewImg === 0) {
            calcNewImg = 4; //poslednja slika
        }
    }

    newImg.setAttribute("src", "./myGallery/img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");
    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        var nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right:" + "420" + "px;";
        var prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left:" + "440" + "px;";
    }
}
