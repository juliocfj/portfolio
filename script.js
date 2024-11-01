document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language");
    const content = document.querySelector(".content");
    const sections = {
        pt: {
            projetos: "Aqui estão meus projetos...",
            tecnologias: "Tecnologias que utilizo...",
            cargos: "Histórico de cargos...",
            cursos: "Meus cursos e certificações...",
            sobre: "Quem sou eu..."
        },
        en: {
            projetos: "Here are my projects...",
            tecnologias: "Technologies I use...",
            cargos: "Job history...",
            cursos: "My courses and certifications...",
            sobre: "About me..."
        },
        it: {
            projetos: "Qui ci sono i miei progetti...",
            tecnologias: "Tecnologie che utilizzo...",
            cargos: "Storia lavorativa...",
            cursos: "I miei corsi e certificazioni...",
            sobre: "Chi sono io..."
        }
    };
    
    function updateContent(section) {
        const lang = languageSelector.value;
        content.style.opacity = 0;
        setTimeout(() => {
            content.textContent = sections[lang][section];
            content.style.opacity = 1;
        }, 500);
    }

    languageSelector.addEventListener("change", () => {
        const section = document.querySelector(".menu-button.active")?.dataset.section || "sobre";
        updateContent(section);
    });

    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".menu-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            updateContent(button.dataset.section);
        });
    });
});
