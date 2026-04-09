document.addEventListener("DOMContentLoaded", () => {
  const navbarRoot = document.getElementById("navbar");
  if (!navbarRoot) return;

  const path = window.location.pathname;
  let base = ".";

  if (path.includes("/components/") || path.includes("/assets/")) {
    base = "..";
  }

  fetch(`${base}/components/navbar.html`)
    .then((response) => response.text())
    .then((data) => {
      navbarRoot.innerHTML = data.replace(/%BASE%/g, base);

      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    })
    .catch(() => {
      navbarRoot.innerHTML = "";
    });
});
