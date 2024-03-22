// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}

// ======== get URL ========
function appUrl() {
    location.href = "https://apps.apple.com/vn/app/lg-live-score/id6475250304";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/74/8b/36/748b3646-d710-f279-fbc5-a381585421a5/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;


// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/4b/15/b5/4b15b510-62a5-c8f9-5229-31f686ae8e4b/88227042-e1ff-4c8b-b91e-9ea31f84c429_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/a5/9c/1a/a59c1aac-111c-3308-0689-18f6e16a795e/7ff6db91-c082-4252-9e0f-ca1402d32228_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c7/9e/b2/c79eb2b7-5f47-0dc2-bc9e-5a3d2a3070c6/51f9b7f5-57a1-426e-8b8b-3fc0206e8302_3.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

