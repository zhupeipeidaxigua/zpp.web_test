let image = document.querySelector("img");
image.onclick = function () {
  let oldSrc = image.getAttribute("src");
  if (oldSrc === "img/tip.png") {
    image.setAttribute("src", "img/banner.png");
  } else {
    image.setAttribute("src", "img/tip.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if(!myName) {
    let myName = prompt("不可以为空哦");
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName+"准备";
}
myButton.onclick = function () {
  setUserName();
};
