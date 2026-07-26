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

/* スクロール時の表示アニメーション */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* 施設写真の拡大表示 */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

function closeLightbox() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.classList.remove("menu-open");
}

if (lightbox && lightboxImage && lightboxClose) {
    lightboxTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const image = trigger.querySelector("img");
            if (!image) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("menu-open");
            lightboxClose.focus();
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
}

/* お問い合わせフォーム */
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
