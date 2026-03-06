document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".menu-btn");
    const list = document.getElementById("gnav-list");

    if (!btn || !list) return;

    const open = () => {
        btn.classList.add("is-active");
        list.classList.add("is-active");
    };

    const close = () => {
        btn.classList.remove("is-active");
        list.classList.remove("is-active");
    };

    const toggle = () => {
        const isOpen = list.classList.contains("is-active");
        isOpen ? close() : open();
    };

    // ボタンで開閉
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
    });

    // リンク押したら閉じる
    list.addEventListener("click", (e) => {
        if (e.target.closest("a")) close();
    });

    // 背景（リンク以外）押したら閉じる
    list.addEventListener("click", (e) => {
        if (!e.target.closest("a")) close();
    });

    // Escで閉じる
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });
});
