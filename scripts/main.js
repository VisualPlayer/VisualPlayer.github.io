let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lailo.png"){
        myImage.setAttribute("src", "images/hllyll.jpg");
    } else {
        myImage.setAttribute("src", "images/lailo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let mytitle = document.querySelector("title");
let mytext = document.querySelector("p");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (myName !== "侯雨彤") {
      alert("你谁啊！");
    } else {
      myHeading.textContent = "我们天下第一好！";
      mytitle.textContent = "亲爱的，你来啦！";
      mytext.textContent = "宝宝我爱你！";
    }
}  

myButton.onclick = function () {
    setUserName();
};