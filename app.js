// let sonali = {
//     name: "sonali",
//     mobNo: 9292201201,
//     color: "pink"

// };

// localStorage.setItem("sonaliobj", JSON.stringify(sonali));

// let firstobject = JSON.parse(localStorage.getItem("sonaliobj"));

let mainEl = document.querySelector(".container");
let inputEl = document.querySelector("textarea")
let btnEl = document.querySelector("button");
let newObj = {};

btnEl.addEventListener("click", function() {
    let sectionEl = document.createElement("section");
    document.body.appendChild(sectionEl);
    var userValue = inputEl.value;
    sectionEl.innerText = userValue;
    inputEl.value = "";
    newObj.push(sectionEl);
    for (let i = 0; i < newObj.length; i++)
        localStorage.setItem("newobj", JSON.stringify(sectionEl));
})