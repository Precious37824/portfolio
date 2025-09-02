const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const projectImgs = document.querySelectorAll(".project-img");
const lightboxImg = document.getElementById("lightboxImg");

projectImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    const modal = new bootstrap.Modal(document.getElementById("lightboxModal"));
    modal.show();
  });
});