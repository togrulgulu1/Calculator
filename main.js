let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span")
let value = document.getElementById("value")

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", function () {

        if (btn[i].innerHTML == "=") {

            value.innerHTML = eval(value.innerHTML);

        } else {

            if (btn[i].innerHTML == "C") {

                value.innerHTML = "";

            } else {

                value.innerHTML += btn[i].innerHTML;

            }
        }
    })

}

btn.forEach(e => {

    e.addEventListener("click", () => {
        let audio = new Audio("switchligth.mp3");
        audio.play();
    })

})