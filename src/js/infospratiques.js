/* Page Infos pratiques : accordéon FAQ qui ouvre/ferme les réponses et met à jour aria-expanded. */

document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(btn => {
        btn.addEventListener("click", () => {
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);

            const answer = btn.nextElementSibling;
            answer.hidden = expanded ? true : false;
        });
    });
});
