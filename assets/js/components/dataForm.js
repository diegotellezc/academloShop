function dataForm() {

const contactForm = document.querySelector('.form')
const btnSubmit = document.querySelector('.btn--submit')
const modalThanks = document.querySelector(".modal__thanks")


contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const URL = 'https://formsubmit.co/ajax/'
  const email = 'vesokif458@asoflex.com'

  const dataForm = {
    name: this.elements.name.value,
    email: this.elements.email.value,
    phone: this.elements.phone.value,
    message: this.elements.message.value,
  }

  window.fetch(URL + email, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
})
    .then(response => response.json())
    .then(data => {
      modalThanks.classList.add("modal--show")
    })
    .catch(error => {
      window.alert('Algo salio mal, intentalo más tarde')
    })

    this.reset()
})

}

export default dataForm