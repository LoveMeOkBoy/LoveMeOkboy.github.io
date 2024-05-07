let myImage = document.getElementById("dynamic-img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/R-C.png") {
    myImage.setAttribute("src", "images/R-A.png");
  } else {
    myImage.setAttribute("src", "images/R-C.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "我 酷毙了！" + myName;
      }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "我 酷毙了！" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  
  
  