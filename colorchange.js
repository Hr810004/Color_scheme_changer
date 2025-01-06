const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id){
            case "lightcoral":
                body.style.backgroundColor = e.target.id;
            case "lightgreen":
                body.style.backgroundColor = e.target.id;
            case "lightblue":
                body.style.backgroundColor = e.target.id;
            case "yellow":
                body.style.backgroundColor = e.target.id;
            default:
                body.style.backgroundColor = white;
        }
    })
});