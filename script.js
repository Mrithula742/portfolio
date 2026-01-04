function goNext() {
  window.location.href = "know.html";
}

const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if (!tab.dataset.section) return; // prevents Go Back from breaking

    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.section).classList.add("active");
  });
});
