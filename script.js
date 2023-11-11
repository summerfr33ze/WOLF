const input = document.querySelector("input")
const badgeInput = document.querySelector(".badge-input")
const badgeInputContainer = document.querySelector(".badge-input-container")
const discreteJobInput = document.querySelector(".discrete-job-input")
const discreteJobContainer = document.querySelector(".discrete-job-container")
const expireDateInput = document.querySelector(".expire-date-input")
const expireDateContainer = document.querySelector(".expire-date-container")
const innerInput = document.querySelector(".inner-input")
const innerContainer = document.querySelector(".inner-container")
const response = document.querySelector(".response")
const labelInput = document.querySelector(".label-input")
const labelInputField = document.querySelector(".label-input-field")
const badgeInputField = document.querySelector(".badge-input-field")
const discreteJobInputField = document.querySelector(".discrete-job-input-field")
const innerInputField = document.querySelector(".inner-input-field")
const expireDateInputField = document.querySelector(".expire-date-input-field")

badgeInput.addEventListener("submit", (e)=> {
    e.preventDefault()
    let badgeInputResponses = ["Badge number captured by the Canine Intelligence Agency","Gonna steal your identity, and then steal your girl"]
    console.log(badgeInput.value)
    badgeInputContainer.textContent = badgeInputField.value
    if (Math.random() > .5){
        response.textContent = badgeInputResponses[0]
    }
    else (response.textContent = badgeInputResponses[1])
    console.log(badgeInputContainer.textContent, response.textContent)
})


discreteJobInput.addEventListener("submit", ()=> {
    discreteJobContainer.textContent = discreteJobInputField.value
    response.textContent = "Approximate number of scooby snacks I ate last night"
})


expireDateInput.addEventListener("submit", ()=> {
    expireDateContainer.textContent = expireDateInputField.value
    response.textContent = "Actually it already expired when I used the squeeze contrast controller as a chew toy"
})

innerInput.addEventListener("submit", ()=> {
    let innerInputResponses = ["Those are rookie numbers","Imma be honest, I'll lose track of your scans halfway through","You can't leave until this is done"]
    innerContainer.textContent = innerInputField.value
    if(innerContainer.textContent < 40){
        response.textContent = innerInputResponses[0]
    }
    else if(innerContainer.textContent >= 40 && innerContainer.textContent <= 60){
        response.textContent = innerInputResponses[1]
    }
    else {
        response.textContent = innerInputResponses[2]
    }
    
})


labelInput.addEventListener("submit", (e) => {
    e.preventDefault()
    let labelInputResponses = ["Congrats! You managed to accomplish the bare minimum expected of a final boxer and scanned the correct label", "Do you expect a pat on the back? I've got no arms!", "Wasn't it Albert Einstein who said doing the same thing and expecting a different result is nuts?", "Such scans, Very years of life wasted", "Scanning boxes is like herding lolcats"]
    let failureResponses = ["Failure: Wrong Box. I was a better final boxer and I'm a dog.", "Wrong box. One trillion dogecoin, Social security number, or credit card info required to unlock computer"]
    let jobArray = Array.from(discreteJobContainer.textContent)
    let labelArray = Array.from(labelInputField.value)
    console.log(discreteJobContainer.textContent)
    console.log(jobArray)
    console.log(labelArray)

    if (labelInputField.value === "DON"){
        response.textContent = "You didn't think I was actually counting your scans did you?"
    }
    else if (jobArray[jobArray.length - 1] + (10 * jobArray[jobArray.length - 2]) + (100 * jobArray[jobArray.length - 3]) === labelArray[labelArray.length - 1] + (10 * labelArray[labelArray.length - 2]) + (100 * labelArray[labelArray.length - 3])) {
        response.textContent = labelInputResponses[Math.floor(Math.random()*5)]
    }
    else {
        response.textContent = failureResponses[Math.floor(Math.random()*2)]
    }
})