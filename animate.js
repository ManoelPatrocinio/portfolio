let elementList;

function startAnimateOnScroll() {
  //get all elements with custom attributes
  elementList = document.querySelectorAll("[data-animate]");

  const animateScroll = () => {
    let header = document.querySelector('#navBar')
    header?.classList.toggle("onSroll", window.scrollY > 0)

    // sets distance between element and top of the page
    const windownTop = window.pageYOffset + window.innerHeight * 0.85;
    elementList.forEach((element) => {
      if (windownTop > element.offsetTop) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  };

  window.addEventListener("scroll", () => {
    animateScroll();
  });

}

startAnimateOnScroll()
