// Alternar abas
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();

    // remove active
    contents.forEach(c => c.classList.remove("active"));

    // pega alvo
    const target = document.querySelector(tab.getAttribute("href"));
    target.classList.add("active");
  });
});
