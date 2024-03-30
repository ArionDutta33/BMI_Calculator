const closeBtn = document.querySelector(".close")
const sidebar = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".menu-logo")

const inputWeight = document.querySelector(".inputWeight")
const inputHeight = document.querySelector(".inputHeight")

const cal = document.querySelector(".cal")

//display the result 
const bmi = document.querySelector(".bmi")
const verdict = document.querySelector(".verdict")
const verdicts = ["Extreme thiness", "Moderate thiness", "Mild thiness", "Noraml Range", "Overwieght", "Obese class 1", "Obese class 2", "Obese class 3"]


const calculate = (inputW, input) => {

    const result = inputW / (input * input);
    return result
}

cal.addEventListener("click", () => {
    const inputW = parseInt(inputWeight.value)
    const input = parseInt(inputHeight.value)
    if (isNaN(input) || isNaN(inputW)) {
        inputHeight.classList.remove("success")
        inputHeight.classList.add("error")
        inputWeight.classList.remove("success")
        inputWeight.classList.add("error")
    } else {
        inputHeight.classList.remove("error")
        inputHeight.classList.add("success")
        inputWeight.classList.remove("error")
        inputWeight.classList.add("success")
    }
    const check = calculate(inputW, input)
    console.log(check)
    if (check < 16) {
        bmi.textContent = check
        verdict.textContent = verdicts[0]
    }
    else if (check >= 16 && check < 17) {
        bmi.textContent = check
        verdict.textContent = verdicts[1]
    }
    else if (check >= 17 && check < 18.5) {
        bmi.textContent = check
        verdict.textContent = verdicts[2]
    }
    else if (check >= 18.5 && check < 24.9) {
        bmi.textContent = check
        verdict.textContent = verdicts[3]
    }
    else if (check >= 24.9 && check < 29.9) {
        bmi.textContent = check
        verdict.textContent = verdicts[4]
    }
    else if (check >= 29.9 && check < 34.9) {
        bmi.textContent = check
        verdict.textContent = verdicts[5]
    }
    else if (check >= 34.9 && check < 39.9) {
        bmi.textContent = check
        verdict.textContent = verdicts[6]
    }
    else {
        bmi.textContent = check
        verdict.textContent = verdicts[7]
    }

})











menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})
