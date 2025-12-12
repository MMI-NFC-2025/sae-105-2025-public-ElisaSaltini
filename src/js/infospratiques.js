/* Page Infos pratiques : accordéon FAQ avec ouverture/fermeture animée et aria-expanded à jour. */

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");

    const closeAnswer = (btn, answer, item) => {
        btn.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");

        const startHeight = answer.scrollHeight;
        answer.style.maxHeight = `${startHeight}px`;
        answer.classList.remove("is-open");

        // Force reflow to ensure the transition starts from the measured height.
        // eslint-disable-next-line no-unused-expressions
        answer.offsetHeight;

        answer.style.maxHeight = "0px";

        const onCloseEnd = (event) => {
            if (event.propertyName !== "max-height") return;
            answer.hidden = true;
            answer.style.maxHeight = "0px";
            answer.removeEventListener("transitionend", onCloseEnd);
        };

        answer.addEventListener("transitionend", onCloseEnd);
    };

    const openAnswer = (btn, answer, item) => {
        btn.setAttribute("aria-expanded", "true");
        item.classList.add("is-open");
        answer.hidden = false;
        answer.classList.add("is-open");

        const targetHeight = answer.scrollHeight;
        answer.style.maxHeight = `${targetHeight}px`;

        const onOpenEnd = (event) => {
            if (event.propertyName !== "max-height") return;
            answer.style.maxHeight = "none";
            answer.removeEventListener("transitionend", onOpenEnd);
        };

        answer.addEventListener("transitionend", onOpenEnd);
    };

    items.forEach((item) => {
        const btn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        if (!btn || !answer) return;

        answer.hidden = true;
        answer.style.maxHeight = "0px";

        btn.addEventListener("click", () => {
            const expanded = btn.getAttribute("aria-expanded") === "true";
            if (expanded) {
                closeAnswer(btn, answer, item);
            } else {
                openAnswer(btn, answer, item);
            }
        });
    });
});
