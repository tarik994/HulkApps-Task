//function change photo SECTION3 

var i = 0
var images = [];
var time = 2000;
images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';

function changeImg() {

    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}
window.onload = changeImg;




/// circle text 

function circleText() {

    let circ = new CircleType(document.getElementById('circleText'));
    circ.raduis(360);

}

circleText()