const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function setMenu(open) {
    if (!menuBtn || !sideMenu || !overlay) return;

    menuBtn.classList.toggle("active", open);
    sideMenu.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    document.body.classList.toggle("menu-open", open);
}

if (menuBtn && sideMenu && overlay) {
    menuBtn.addEventListener("click", () => {
        setMenu(!sideMenu.classList.contains("open"));
    });

    overlay.addEventListener("click", () => setMenu(false));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenu(false);
    });
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", () => {
        const submitBtn = document.getElementById("submitBtn");

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loader"></span>送信中...';
        }
    });
}
