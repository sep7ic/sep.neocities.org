window.onload = choosePic;

var theAd = 0;
var adImages = new Array(
    '<a href="https://sep.neocities.org/neoplug.html" target="_blank"><img src="plugs/testad.png" id="neoplug" alt="test ad"></a>',
    '<a href="https://sep.neocities.org/" target="_blank"><img src="plugs/sep.png" id="neoplug" alt="sep :D"></a>',
    );

function choosePic() {
     theAd = Math.floor(Math.random() * adImages.length);
     document.getElementById("centered").innerHTML = adImages[theAd];

     rotate();
}

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("centered").innerHTML = adImages[theAd];

     setTimeout(rotate, 3 * 5000);
}