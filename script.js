document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language");
    const content = document.querySelector(".content");
    const languageLabel = document.getElementById("language-label");

    const sections = {
        pt: {
            projetos: "Aqui estão meus projetos...",
            tecnologias: "Tecnologias que utilizo...",
            cargos: "Histórico de cargos...",
            cursos: "Meus cursos e certificações...",
            sobre: "Sou um engenheiro de redes e analista de segurança cibernética com mais de 7 anos de experiência...",
            buttons: {
                projetos: "Projetos",
                tecnologias: "Tecnologias",
                cargos: "Cargos",
                cursos: "Cursos e Certificações",
                sobre: "Quem sou eu"
            },
            languageLabel: "Selecione o Idioma:"
        },
        en: {
            projetos: "Here are my projects...",
            tecnologias: "Technologies I use...",
            cargos: "Job history...",
            cursos: "My courses and certifications...",
            sobre: "I am a network engineer and cybersecurity analyst with over 7 years of experience...",
            buttons: {
                projetos: "Projects",
                tecnologias: "Technologies",
                cargos: "Jobs",
                cursos: "Courses and Certifications",
                sobre: "About Me"
            },
            languageLabel: "Select Language:"
        },
        it: {
            projetos: "Ecco i miei progetti...",
            tecnologias: "Tecnologie che utilizzo...",
            cargos: "Esperienza lavorativa...",
            cursos: "I miei corsi e certificazioni...",
            sobre: "Sono un ingegnere di rete e analista di sicurezza informatica con oltre 7 anni di esperienza...",
            buttons: {
                projetos: "Progetti",
                tecnologias: "Tecnologie",
                cargos: "Posizioni",
                cursos: "Corsi e Certificazioni",
                sobre: "Chi sono"
            },
            languageLabel: "Seleziona la Lingua:"
        }
    };

    function updateButtonsText(lang) {
        document.querySelectorAll(".menu-button").forEach(button => {
            const section = button.dataset.section;
            button.textContent = sections[lang].buttons[section];
        });
    }

    function updateContent(section) {
        const lang = languageSelector.value;
        content.style.opacity = 0;
        setTimeout(() => {
            content.textContent = sections[lang][section];
            content.style.opacity = 1;
        }, 500);
    }

    function updateLanguageLabel(lang) {
        languageLabel.textContent = sections[lang].languageLabel;
    }

    // Atualiza idioma dos botões e conteúdo inicial ao selecionar novo idioma
    languageSelector.addEventListener("change", () => {
        const lang = languageSelector.value;
        updateButtonsText(lang);
        updateLanguageLabel(lang);
        const section = document.querySelector(".menu-button.active")?.dataset.section || "sobre";
        updateContent(section);
    });

    // Atualiza conteúdo ao clicar em cada botão
    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".menu-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            updateContent(button.dataset.section);
        });
    });

    // Configura idioma inicial como inglês
    updateButtonsText("en");
    updateLanguageLabel("en");
});
