const btn = document.getElementById("menuBtn");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
});

overlay.addEventListener("click", () => {
    btn.classList.remove("active");
    menu.classList.remove("open");
    overlay.classList.remove("open");
});
// お問い合わせフォーム
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function () {

        const btn = document.getElementById("submitBtn");

        btn.disabled = true;

        btn.innerHTML = `
            <span class="loader"></span>
            送信中...
        `;

    });

}