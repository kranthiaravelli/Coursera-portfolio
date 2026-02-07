const links = document.querySelectorAll(".navigate-links a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));

    link.classList.add("active");

    const targetId = link.getAttribute("data-page");

    pages.forEach(page => {
      page.style.display = "none";
    });

    document.getElementById(targetId).style.display = "block";
  });
});

document.getElementById("education").style.display = "block";
