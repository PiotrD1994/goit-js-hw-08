import throttle from "lodash.throttle"
const form = document.querySelector('.feedback-form')
const email = form.elements.email
const message = form.elements.message


 const formData = {
        email: email.value,
        message: message.value
    }




