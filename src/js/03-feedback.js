import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")
const emailInput = document.querySelector('[name="email"]')
const messageInput = document.querySelector('[name="message"]')

form.addEventListener("input", throttle((event) => {
    saveMessage(event)
},500))


function saveMessage(event) {
    event.preventDefault()
const { elements: {email, message}} = form
const formData = {
    email: email.value,
    message: message.value
}
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

const savedData = localStorage.getItem("feedback-form-state")
if (savedData !== null) {
    const parsedData = JSON.parse(savedData)
    emailInput.value = parsedData.email
    messageInput.value = parsedData.message
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
   const dataToLog = {
    email: emailInput.value,
    message: messageInput.value
   }
   console.log(dataToLog)
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset()
})


