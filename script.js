
const text = document.querySelector('h1')

const thisButton = document.querySelector('.button')
thisButton.addEventListener("click", function(){
    console.log("i was clicked")
    if(text.innerHTML === "damn right") {
        text.innerHTML = "This website will be beautiful"
    } else{
        text.innerHTML = "damn right"
    }
})