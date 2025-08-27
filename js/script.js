"use strict";

class Navigation {
    constructor(menuSelector, contentSelector) {
        this.menu = document.querySelector(menuSelector);
        this.content = document.querySelector(contentSelector);

        this.menu.addEventListener("click", (e) => this.onClick(e));
        window.addEventListener("popstate", () => this.updateView());

        this.updateView();
    }

    onClick(e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const url = e.target.getAttribute("href");

            // міняємо адресу через pushState
            history.pushState({}, "", url);

            // оновлюємо вигляд
            this.updateView();
        }
    }

    updateView() {
        const path = window.location.pathname;

        // прибираємо попередній active
        this.menu.querySelectorAll("a").forEach((a) =>
            a.classList.remove("active")
        );

        // підсвітка активного
        const activeLink = this.menu.querySelector(`a[href="${path}"]`);
        if (activeLink) activeLink.classList.add("active");

        // проста симуляція контенту
        this.renderContent(path);
    }

    renderContent(path) {
        let html = "";
        switch (path) {
            case "/home":
                html = "<h2>Welcome to Home</h2>";
                break;
            case "/about":
                html = "<h2>About Us</h2><p>Some info...</p>";
                break;
            case "/contact":
                html = "<h2>Contact Page</h2><p>Email us at contact@example.com</p>";
                break;
            default:
                html = "<h2>404 Not Found</h2>";
        }
        this.content.innerHTML = html;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    new Navigation("nav ul", "#content");
});





