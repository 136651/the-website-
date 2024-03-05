let mainContent = document.getElementById("main1");
mainContent.style.backgroundColor = "rgb(243,235,220)";
mainContent.style.top = "190px";
mainContent.style.height = "1500px";
mainContent.style.width = "100%";

let familyValueImg = document.getElementById("family");
familyValueImg.src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/15cd6fc144fa9c6d0a1accf25f1fcee2ce393c40-1000x500.png?w=1125&q=40&fit=max&auto=format";
familyValueImg.style.position = "absolute";
familyValueImg.style.top = "320px";
familyValueImg.style.left = "195px";
familyValueImg.style.height="300px";
familyValueImg.style.width="550px";
familyValueImg.style.borderRadius="10px";
familyValueImg.style.paddingBottom="120px";
familyValueImg.style.backgroundColor="white";


let familyValueHead = document.getElementById("familyHead");
familyValueHead.innerHTML = "Family value!"
familyValueHead.style.position = "absolute";
familyValueHead.style.top = "620px";
familyValueHead.style.left = "205px";
familyValueHead.style.color= "rgb(80,35,20)";


let familyValueText = document.getElementById("familyText");
familyValueText.innerHTML = "When you buy a qualifying Adult Meal between 12th - 23rd<br>February"
familyValueText.style.position = "absolute";
familyValueText.style.top = "670px";
familyValueText.style.left = "205px";
familyValueText.style.color="rgb(80,35,20)";
familyValueText.style.fontSize="14px";

let familyValueButton = document.getElementById("familyButton");
familyValueButton.href="#";
familyValueButton.innerHTML = "redeem offer";
familyValueButton.style.position = "absolute";
familyValueButton.style.top = "675px";
familyValueButton.style.left = "585px";
familyValueButton.style.paddingTop="15px";
familyValueButton.style.paddingBottom="15px";
familyValueButton.style.paddingLeft="30px";
familyValueButton.style.paddingRight="30px";
familyValueButton.style.borderRadius="40px";
familyValueButton.style.backgroundColor="rgb(202, 11, 6)";
familyValueButton.style.color="white";
familyValueButton.style.textDecoration="none";
familyValueButton.style.fontWeight="bold";
familyValueButton.addEventListener("mouseover", function(){
  familyValueButton.style.backgroundColor="rgb(214,63,52)";
})
familyValueButton.addEventListener("mouseout", function(){
  familyValueButton.style.backgroundColor="rgb(202, 11, 6)";
})

let pepperValueImg = document.getElementById("pepper");
pepperValueImg.src = "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/423b0c1100e6ba2a700189d038116a109852f884-1000x500.png?w=1125&q=40&fit=max&auto=format";
pepperValueImg.style.position = "absolute";
pepperValueImg.style.top = "320px";
pepperValueImg.style.left = "765px";
pepperValueImg.style.height="300px";
pepperValueImg.style.width="550px";
pepperValueImg.style.borderRadius="10px";
pepperValueImg.style.paddingBottom="120px";
pepperValueImg.style.backgroundColor="white";
pepperValueImg.style.zIndex="1";

let pepperValueHead = document.getElementById("pepperHead");
pepperValueHead.innerHTML = "Peppercorn Gourmet Kings";
pepperValueHead.style.position = "absolute";
pepperValueHead.style.top = "620px";
pepperValueHead.style.left = "775px";
pepperValueHead.style.color= "rgb(80,35,20)";
pepperValueHead.style.zIndex="1";

let pepperValueText = document.getElementById("pepperText");
pepperValueText.innerHTML = "150g of Aberdeen Angus or Crispy Chicken with a <br> classic Peppercorn mayo"
pepperValueText.style.position = "absolute";
pepperValueText.style.top = "670px";
pepperValueText.style.left = "775px";
pepperValueText.style.color="rgb(80,35,20)";
pepperValueText.style.fontSize="14px";
pepperValueText.style.zIndex="1";

let pepperValueButton = document.getElementById("pepperButton");
pepperValueButton.href="#";
pepperValueButton.innerHTML = "redeem offer";
pepperValueButton.style.position = "absolute";
pepperValueButton.style.top = "675px";
pepperValueButton.style.left = "1155px";
pepperValueButton.style.paddingTop="15px";
pepperValueButton.style.paddingBottom="15px";
pepperValueButton.style.paddingLeft="30px";
pepperValueButton.style.paddingRight="30px";  
pepperValueButton.style.borderRadius="40px";
pepperValueButton.style.backgroundColor="rgb(202, 11, 6)";
pepperValueButton.style.color="white";
pepperValueButton.style.textDecoration="none";
pepperValueButton.style.fontWeight="bold";
pepperValueButton.addEventListener("mouseover", function(){
  pepperValueButton.style.backgroundColor="rgb(214,63,52)";
})
pepperValueButton.addEventListener("mouseout", function(){
  pepperValueButton.style.backgroundColor="rgb(202, 11, 6)";
})
pepperValueButton.style.zIndex= "1";

let chickenValueImg = document.getElementById("chicken");
chickenValueImg.src = "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/e821764096a7c20f4bf0caeda50391f28636ebcc-1000x500.png?w=1125&q=40&fit=max&auto=format"
chickenValueImg.style.position = "absolute";
chickenValueImg.style.top = "760px";
chickenValueImg.style.left = "195px";
chickenValueImg.style.height="300px";
chickenValueImg.style.width="550px";
chickenValueImg.style.borderRadius="10px";
chickenValueImg.style.paddingBottom="120px";
chickenValueImg.style.backgroundColor="white";
chickenValueImg.style.zIndex="1";

let chickenValueHead = document.getElementById("chickenHead");
chickenValueHead.innerHTML = "NEW Doritos Tangy Cheese Chicken Fries";
chickenValueHead.style.position = "absolute";
chickenValueHead.style.top = "1060px";
chickenValueHead.style.left = "205px";
chickenValueHead.style.color= "rgb(80,35,20)";
chickenValueHead.style.zIndex="1";

let chickenValueText = document.getElementById("chickenText");
chickenValueText.innerHTML = "150g of Aberdeen Angus or Crispy Chicken with"
chickenValueText.style.position = "absolute";
chickenValueText.style.top = "1110px";
chickenValueText.style.left = "205px";
chickenValueText.style.color="rgb(80,35,20)";
chickenValueText.style.fontSize="14px";
chickenValueText.style.zIndex="1";

let chickenValueButton = document.getElementById("chickenButton");
chickenValueButton.href="#";
chickenValueButton.innerHTML = "Order now";
chickenValueButton.style.position = "absolute";
chickenValueButton.style.top = "1120px";
chickenValueButton.style.left = "595px";
chickenValueButton.style.paddingTop="15px";
chickenValueButton.style.paddingBottom="15px";
chickenValueButton.style.paddingLeft="30px";
chickenValueButton.style.paddingRight="30px";
chickenValueButton.style.borderRadius="40px";
chickenValueButton.style.backgroundColor="rgb(202, 11, 6)";
chickenValueButton.style.color="white";
chickenValueButton.style.textDecoration="none";
chickenValueButton.style.fontWeight="bold";
chickenValueButton.addEventListener("mouseover", function(){
  chickenValueButton.style.backgroundColor="rgb(214,63,52)";
})
chickenValueButton.addEventListener("mouseout", function(){
  chickenValueButton.style.backgroundColor="rgb(202, 11, 6)";
})
chickenValueButton.style.zIndex= "1";

let cheeseValueImg = document.getElementById("cheese");
cheeseValueImg.src = "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/5f714c93ee0bdac4925dcdccd9292b8a75292b16-1000x500.png?w=1125&q=40&fit=max&auto=format"
cheeseValueImg.style.position = "absolute";
cheeseValueImg.style.top = "760px";
cheeseValueImg.style.left = "765px";
cheeseValueImg.style.height="300px";
cheeseValueImg.style.width="550px";
cheeseValueImg.style.borderRadius="10px";
cheeseValueImg.style.paddingBottom="120px";
cheeseValueImg.style.backgroundColor="white";  
cheeseValueImg.style.zIndex="1";

let cheeseValueHead = document.getElementById("cheeseHead");
cheeseValueHead.innerHTML = "NEW Doritos Tangy Cheese Chicken Fries";
cheeseValueHead.style.position = "absolute";
cheeseValueHead.style.top = "1060px";
cheeseValueHead.style.left = "775px";
cheeseValueHead.style.color= "rgb(80,35,20)";  
cheeseValueHead.style.zIndex="1";

let cheeseValueText = document.getElementById("cheeseText");
cheeseValueText.innerHTML = "150g of Aberdeen Angus or Crispy Chicken with"
cheeseValueText.style.position = "absolute";
cheeseValueText.style.top = "1110px";
cheeseValueText.style.left = "775px";
cheeseValueText.style.color="rgb(80,35,20)";
cheeseValueText.style.fontSize="14px";
cheeseValueText.style.zIndex="1";


let cheeseValueButton = document.getElementById("cheeseButton");
cheeseValueButton.href="#";
cheeseValueButton.innerHTML = "Order now";
cheeseValueButton.style.position = "absolute";
cheeseValueButton.style.top = "1120px";
cheeseValueButton.style.left = "1165px";
cheeseValueButton.style.paddingTop="15px";
cheeseValueButton.style.paddingBottom="15px";
cheeseValueButton.style.paddingLeft="30px";
cheeseValueButton.style.paddingRight="30px";
cheeseValueButton.style.borderRadius="40px";
cheeseValueButton.style.backgroundColor="rgb(202, 11, 6)";
cheeseValueButton.style.color="white";
cheeseValueButton.style.textDecoration="none";
cheeseValueButton.style.fontWeight="bold";
cheeseValueButton.addEventListener("mouseover", function(){
  cheeseValueButton.style.backgroundColor="rgb(214,63,52)";
})
cheeseValueButton.addEventListener("mouseout", function(){
  cheeseValueButton.style.backgroundColor="rgb(202, 11, 6)";
})
cheeseValueButton.style.zIndex= "1";

let secondPart=document.getElementById("main2");
secondPart.style.top="1150px";
secondPart.style.height="500px";
secondPart.style.backgroundColor="rgb(237,225,205)";

let phoneImg=document.getElementById("phoneimg");
phoneImg.src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png?w=1077&q=40&fit=max&auto=format";
phoneImg.style.position="absolute";
phoneImg.style.top="1380px";
phoneImg.style.left="600px";
phoneImg.style.height="600px";
phoneImg.style.width="400px";

let phoneHead=document.getElementById("phoneText");
phoneHead.style.position="absolute";
phoneHead.style.top="1500px";
phoneHead.style.left="1000px";
phoneHead.innerHTML="Save £££ <br> With offers on <br> demand";
phoneHead.style.fontSize="52px";
phoneHead.style.color="rgb(80, 35, 20)";
phoneHead.style.fontWeight="bolder";
phoneHead.style.fontFamily="sans-serif";

let phonePara=document.getElementById("terms12");
phonePara.style.position="absolute";
phonePara.style.top="1760px";
phonePara.style.left="1000px";
phonePara.innerHTML="Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S.<br> and other countries. App Store is a service mark of Apple Inc. Google Play is a<br> trademark of Google Inc. Terms apply.";
phonePara.style.fontSize="15px";
phonePara.style.color="rgb(80, 35, 20)";

let google=document.getElementById("googlePlay");
google.style.position="absolute";
google.src="https://logospng.org/download/google-play/logo-google-play-4096.png";
google.style.top="1810px";
google.style.left="1000px";
google.style.height="150px";
google.style.width="150px";

let Ios=document.getElementById("IosPlay")
Ios.style.position="absolute";
Ios.src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png";
Ios.style.top="1865px";
Ios.style.left="1150px";
Ios.style.height="40px";
Ios.style.width="150px";

let thirdPart=document.getElementById("main3");
thirdPart.style.position="absolute";
thirdPart.style.top="2000px";
thirdPart.style.height="700px";
thirdPart.style.width= "100%";
thirdPart.style.backgroundColor="rgb(32,1,1)";

let loadlinks=document.getElementById("aboutBK");
loadlinks.href="https://www.burgerking.co.uk/";
loadlinks.innerHTML= "About BK ®";
loadlinks.style.position="absolute";
loadlinks.style.top="140px";
loadlinks.style.left="100px";
loadlinks.style.fontSize="14px";
loadlinks.style.color="rgb(172,146,126)"
loadlinks.style.textDecoration="none";
loadlinks.addEventListener("mouseover",function(){
  loadlinks.style.textDecoration="underline";
})
loadlinks.addEventListener("mouseout",function(){
  loadlinks.style.textDecoration="none";
})

let loadlinks2=document.getElementById("FAQ");
loadlinks2.href="https://www.burgerking.co.uk/faq";
loadlinks2.innerHTML= "FAQ";
loadlinks2.style.position="absolute";
loadlinks2.style.top="170px";
loadlinks2.style.left="100px";
loadlinks2.style.fontSize="14px";
loadlinks2.style.color="rgb(172,146,126)"
loadlinks2.style.textDecoration="none";
loadlinks2.addEventListener("mouseover",function(){
  loadlinks2.style.textDecoration="underline";
})
loadlinks2.addEventListener("mouseout",function(){
  loadlinks2.style.textDecoration="none";
})

let loadlinks3=document.getElementById("policies");
loadlinks3.href="https://www.burgerking.co.uk/policies";
loadlinks3.innerHTML= "Policies";
loadlinks3.style.position="absolute";
loadlinks3.style.top="200px";
loadlinks3.style.left="100px";
loadlinks3.style.fontSize="14px";
loadlinks3.style.color="rgb(172,146,126)"
loadlinks3.style.textDecoration="none";
loadlinks3.addEventListener("mouseover",function(){
  loadlinks3.style.textDecoration="underline";
})
loadlinks3.addEventListener("mouseout",function(){
  loadlinks3.style.textDecoration="none";
})

let loadlinks4=document.getElementById("getInTouch");
loadlinks4.href="https://www.burgerking.co.uk/getInTouch";
loadlinks4.innerHTML= "Get in touch";
loadlinks4.style.position="absolute";
loadlinks4.style.top="230px";
loadlinks4.style.left="100px";
loadlinks4.style.fontSize="14px";
loadlinks4.style.color="rgb(172,146,126)"  
loadlinks4.style.textDecoration="none";
loadlinks4.addEventListener("mouseover",function(){
  loadlinks4.style.textDecoration="underline";
})
loadlinks4.addEventListener("mouseout",function(){
  loadlinks4.style.textDecoration="none";  
})

let loadlinks5=document.getElementById("tNc");
loadlinks5.href="https://www.burgerking.co.uk/tNc";
loadlinks5.innerHTML= "Terms & conditions";
loadlinks5.style.position="absolute";
loadlinks5.style.top="260px";
loadlinks5.style.left="100px";
loadlinks5.style.fontSize="14px";
loadlinks5.style.color="rgb(172,146,126)"
loadlinks5.style.textDecoration="none";
loadlinks5.addEventListener("mouseover",function(){
  loadlinks5.style.textDecoration="underline";
})
loadlinks5.addEventListener("mouseout",function(){
  loadlinks5.style.textDecoration="none";
})

let loadlinks6=document.getElementById("Guest");
loadlinks6.href="https://www.burgerking.co.uk/guest";
loadlinks6.innerHTML= "Guest trac";
loadlinks6.style.position="absolute";
loadlinks6.style.top="290px";
loadlinks6.style.left="100px";
loadlinks6.style.fontSize="14px";
loadlinks6.style.color="rgb(172,146,126)"
loadlinks6.style.textDecoration="none";
loadlinks6.addEventListener("mouseover",function(){
  loadlinks6.style.textDecoration="underline";
})
loadlinks6.addEventListener("mouseout",function(){
  loadlinks6.style.textDecoration="none";
})

let loadlinks7=document.getElementById("tradeMarks");
loadlinks7.href="https://www.burgerking.co.uk/tradeMarks";
loadlinks7.innerHTML= "Trademarks";
loadlinks7.style.position="absolute";
loadlinks7.style.top="320px";
loadlinks7.style.left="100px";
loadlinks7.style.fontSize="14px";
loadlinks7.style.color="rgb(172,146,126)"
loadlinks7.style.textDecoration="none";
loadlinks7.addEventListener("mouseover",function(){
  loadlinks7.style.textDecoration="underline";
})
loadlinks7.addEventListener("mouseout",function(){
  loadlinks7.style.textDecoration="none";
})

let loadlinks8=document.getElementById("Careers")
loadlinks8.href="https://www.burgerking.co.uk/careers";
loadlinks8.innerHTML= "Careers";
loadlinks8.style.position="absolute";
loadlinks8.style.top="140px";
loadlinks8.style.left="700px";
loadlinks8.style.fontSize="14px";
loadlinks8.style.color="rgb(172,146,126)"
loadlinks8.style.textDecoration="none";
loadlinks8.addEventListener("mouseover",function(){
  loadlinks8.style.textDecoration="underline";
})
loadlinks8.addEventListener("mouseout",function(){
  loadlinks8.style.textDecoration="none";
})

let loadlinks9=document.getElementById("privacy");
loadlinks9.href="https://www.burgerking.co.uk/privacy";
loadlinks9.innerHTML= "Privacy policy";
loadlinks9.style.position="absolute";
loadlinks9.style.top="170px";
loadlinks9.style.left="700px";
loadlinks9.style.fontSize="14px";
loadlinks9.style.color="rgb(172,146,126)"
loadlinks9.style.textDecoration="none";
loadlinks9.addEventListener("mouseover",function(){
  loadlinks9.style.textDecoration="underline";
})
loadlinks9.addEventListener("mouseout",function(){
  loadlinks9.style.textDecoration="none";
})

let loadlinks10=document.getElementById("Modern");
loadlinks10.href="https://www.burgerking.co.uk/modern";
loadlinks10.innerHTML= "Modern slavery statement";
loadlinks10.style.position="absolute";
loadlinks10.style.top="200px";
loadlinks10.style.left="700px";
loadlinks10.style.fontSize="14px";
loadlinks10.style.color="rgb(172,146,126)"
loadlinks10.style.textDecoration="none";
loadlinks10.addEventListener("mouseover",function(){
  loadlinks10.style.textDecoration="underline";
})
loadlinks10.addEventListener("mouseout",function(){
  loadlinks10.style.textDecoration="none";
})

let loadlinks11=document.getElementById("Tax")
loadlinks11.href="https://www.burgerking.co.uk/tax";
loadlinks11.innerHTML= "Tax stratergy";
loadlinks11.style.position="absolute";
loadlinks11.style.top="230px";
loadlinks11.style.left="700px";
loadlinks11.style.fontSize="14px";
loadlinks11.style.color="rgb(172,146,126)"
loadlinks11.style.textDecoration="none";
loadlinks11.addEventListener("mouseover",function(){
  loadlinks11.style.textDecoration="underline";
})
loadlinks11.addEventListener("mouseout",function(){
  loadlinks11.style.textDecoration="none";
})

let loadlinks12=document.getElementById("BKinfo");
loadlinks12.innerHTML="BK® INFO"
loadlinks12.style.position="absolute";
loadlinks12.style.top="80px";
loadlinks12.style.left="100px";
loadlinks12.style.fontSize="25px";
loadlinks12.style.color="rgb(242,230,212)";

let loadlinks13=document.getElementById("BKyou");
loadlinks13.innerHTML="BK® AND YOU"
loadlinks13.style.position="absolute";
loadlinks13.style.top="80px";
loadlinks13.style.left="700px";
loadlinks13.style.fontSize="25px";
loadlinks13.style.color="rgb(242,230,212)";

let hrline=document.createElement("hr");
hrline.style.position="absolute";
hrline.style.top="2450px";
hrline.style.left="100px";
hrline.style.width="1300px";
hrline.style.backgroundColor="white";
hrline.style.height="1px";
document.body.appendChild(hrline);

let hrline1=document.createElement("hr");
hrline1.style.position="absolute";
hrline1.style.top="2650px";
hrline1.style.left="100px";
hrline1.style.width="1300px";
hrline1.style.backgroundColor="white";
hrline1.style.height="1px";
document.body.appendChild(hrline1);

let kingBurger1=document.getElementById("KingBurger");
kingBurger1.innerHTML="Burger King";
kingBurger1.style.position="absolute";
kingBurger1.style.top="470px";
kingBurger1.style.left="100px";
kingBurger1.style.color="rgb(242,230,212)";

let TandC=document.getElementById("TcPar");
TandC.innerHTML="TM & Copyright 2021 Burger King Corporation. All Rights Reserved.";
TandC.style.position="absolute";
TandC.style.top="530px";
TandC.style.left="100px";
TandC.style.color="rgb(242,230,212)";
TandC.style.fontSize="14px"

let symbol1=document.getElementById("instagram");
symbol1.src= "https://static.vecteezy.com/system/resources/previews/023/986/891/large_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
symbol1.style.position="absolute";
symbol1.style.top="480px";
symbol1.style.left="1195px";
symbol1.style.height="45px";
symbol1.style.width="45px";

let symbol2=document.getElementById("facebook");
symbol2.src= "https://th.bing.com/th/id/OIP.8g-vEJ3rcRB_ebTR1X16MwHaHa?rs=1&pid=ImgDetMain";
symbol2.style.position="absolute";
symbol2.style.top="487px";
symbol2.style.left="1250px";
symbol2.style.height="30px";
symbol2.style.width="30px";

let symbol3=document.getElementById("Youtube");
symbol3.src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/youtube-square-social-media-512.png"
symbol3.style.position="absolute";
symbol3.style.top="480px";
symbol3.style.left="1290px";
symbol3.style.height="45px";
symbol3.style.width="45px";

let symbol4=document.getElementById("twitter");
symbol4.src="https://th.bing.com/th/id/OIP._k-ZYl5czbxu7LjueTc-gAHaHa?rs=1&pid=ImgDetMain"
symbol4.style.position="absolute";
symbol4.style.top="487px";
symbol4.style.left="1345px";
symbol4.style.height="30px";
symbol4.style.width="30px";

let symbol5=document.getElementById("website");
symbol5.src="https://static.vecteezy.com/system/resources/previews/000/357/012/non_2x/vector-globe-icon.jpg"
symbol5.style.position="absolute";
symbol5.style.top="485px";
symbol5.style.left="1145px";
symbol5.style.height="35px";
symbol5.style.width="35px";

// let symbol6=document.getElementById("en");
// symbol6.style.position= "absolute";
// symbol6.style.top="480px";
// symbol6.style.left="1115px";
// symbol6.innerHTML="EN-"
// symbol6.style.fontSize="15px";
// symbol6.style.color="white";

let menuOption1=document.getElementById("Order");
menuOption1.addEventListener("mouseover",function(){
  menuOption1.style.color="rgb(202, 11, 6)";
})
menuOption1.addEventListener("mouseout",function(){
  menuOption1.style.color="rgb(80, 35, 20)";
})

let menuOption2=document.getElementById("Offers");
menuOption2.addEventListener("mouseover",function(){
  menuOption2.style.color="rgb(202, 11, 6)";
})
menuOption2.addEventListener("mouseout",function(){
  menuOption2.style.color="rgb(80, 35, 20)";
})

let menuOption3=document.getElementById("Menu");
  menuOption3.addEventListener("mouseover",function(){
    menuOption3.style.color="rgb(202, 11, 6)";
  })
  menuOption3.addEventListener("mouseout",function(){
    menuOption3.style.color="rgb(80, 35, 20)";
  })

let menuOption4=document.getElementById("Delivery");
  menuOption4.addEventListener("mouseover",function(){
    menuOption4.style.color="rgb(202, 11, 6)";
  })
  menuOption4.addEventListener("mouseout",function(){
    menuOption4.style.color="rgb(80, 35, 20)";
  })

let menuOption5=document.getElementById("More");
  menuOption5.addEventListener("mouseover",function(){
    menuOption5.style.color="rgb(202, 11, 6)";
  })
  menuOption5.addEventListener("mouseout",function(){
    menuOption5.style.color="rgb(80, 35, 20)";
  })

let menuOption6=document.getElementById("location2");
  menuOption6.addEventListener("mouseover",function(){
    menuOption6.style.textDecoration="none";
  })
  menuOption6.addEventListener("mouseout",function(){
    menuOption6.style.textDecoration="underline";
  })
