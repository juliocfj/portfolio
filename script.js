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
            sobre: "Sou um engenheiro de redes e analista de segurança cibernética com mais de 7 anos de experiência em infraestrutura de redes, ambientes cloud e on-premise. Com formação em Redes de Computadores pela Universidade Anhembi Morumbi e em Análise e Desenvolvimento de Sistemas pela Fatec São José dos Campos, possuo certificações da Microsoft e Fortinet, e uma sólida experiência com ferramentas de automação e gestão como Ansible, Terraform e Kubernetes. Minha atuação se destaca pela administração e implementação de soluções em cloud, automação de processos e compliance com normas de segurança (incluindo GDPR), sempre visando a otimização e segurança das operações de TI. Com um perfil colaborativo e focado em resultados, busco continuamente evoluir minhas habilidades e expandir meu impacto na área de tecnologia.",
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
            sobre: "I am a network engineer and cybersecurity analyst with over 7 years of experience in network infrastructure, both in cloud and on-premise environments. With a degree in Computer Networks from Universidade Anhembi Morumbi and in Systems Analysis and Development from Fatec São José dos Campos, I hold certifications from Microsoft and Fortinet and have solid experience with automation and management tools such as Ansible, Terraform, and Kubernetes. My expertise lies in cloud infrastructure management, process automation, and compliance with security standards (including GDPR), always aiming for the optimization and security of IT operations. I am collaborative, results-oriented, and continuously seeking to evolve my skills and expand my impact in the tech field.",
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
            projetos: "Qui ci sono i miei progetti...",
            tecnologias: "Tecnologie che utilizzo...",
            cargos: "Storia lavorativa...",
            cursos: "I miei corsi e certificazioni...",
            sobre: "Sono un ingegnere di rete e analista di sicurezza informatica con oltre 7 anni di esperienza in infrastrutture di rete, sia in ambienti cloud che on-premise. Con una laurea in Reti di Computer presso l'Universidade Anhembi Morumbi e in Analisi e Sviluppo di Sistemi presso la Fatec São José dos Campos, possiedo certificazioni da Microsoft e Fortinet e ho una solida esperienza con strumenti di automazione e gestione come Ansible, Terraform e Kubernetes. La mia competenza principale risiede nella gestione dell'infrastruttura cloud, nell'automazione dei processi e nella conformità con gli standard di sicurezza (compreso il GDPR), con l'obiettivo costante di ottimizzare e proteggere le operazioni IT. Sono collaborativo, orientato ai risultati e cerco continuamente di evolvere le mie competenze per ampliare il mio impatto nel settore tecnologico.",
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
        const buttonElements = document.querySelectorAll(".menu-button");
        buttonElements.forEach(button => {
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

    languageSelector.addEventListener("change", () => {
        const lang = languageSelector.value;
        updateButtonsText(lang); 
        updateLanguageLabel(lang);
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

    updateButtonsText("en");
    updateLanguageLabel("en");
});
