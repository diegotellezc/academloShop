function urlChanges () {
    let banner1 = document.querySelector(".banner1")
    let banner2 = document.querySelector(".banner2")
    let banner3 = document.querySelector(".banner3")
    let banner4 = document.querySelector(".banner4")

    var mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
        banner1.setAttribute("src", "./assets/img/largeBanner1.png");
        banner2.setAttribute("src", "./assets/img/largeBanner2.png");
        banner3.setAttribute("src", "./assets/img/largeBanner3.png");
        banner4.setAttribute("src", "./assets/img/largeBanner4.png");
    } 
}

export default urlChanges