function contactButton() {
    const contactButton = document.querySelector('.contact__button');
    
    const formContainer = document.querySelector('.form__container');
    
    contactButton.addEventListener('click', function () {
        formContainer.classList.toggle('active');
    });

}

export default contactButton