const boxes = document.querySelectorAll(".box");

function revealOnScroll() {
  const triggerBottom = window.innerHeight - 100;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        box.classList.add("reveal");
      }, index * 300); // delay each box
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
