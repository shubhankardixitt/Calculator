let string = ""
let memory = ""
let buttons = document.querySelectorAll(".button")
let outputField = document.querySelector(".input")
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (anshu) => {       //anshu is used to tell ki kuch bhi likh sakte, good practice is to use e or event instead
        if (anshu.target.innerHTML == "C") {            //anshu.target says get the element where this event occured
            string = ""
            outputField.value = string
        }
        else if (anshu.target.innerHTML == "=") {
            string = eval(string)
            outputField.value = string
        }
        else if (anshu.target.innerHTML == "M+") {
            memory = eval(memory + "+" + string)
            outputField.value = memory
        }
        else if (anshu.target.innerHTML == "M-") {
            memory = eval(memory + "-" + string)
            outputField.value = memory
        }
        else {
            string = string + anshu.target.innerHTML
            outputField.value = string
        }
    })
})