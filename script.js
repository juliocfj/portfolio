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
           projetos: `<strong>Automazione e Deployment di Infrastruttura Cloud</strong><br>
Descrizione: Ho automatizzato e gestito l'infrastruttura su Google Cloud utilizzando Kubernetes e Terraform, creando ambienti scalabili e sicuri per un'ottimale gestione delle risorse e del traffico.<br>
Tecnologie: Kubernetes, Terraform, GCP<br>
Risultati: Riduzione dei costi operativi e miglioramento della scalabilità in risposta a picchi di traffico.<br><br>

<strong>Sviluppo di una Base di Conoscenza Interna</strong><br>
Descrizione: Ho implementato una base di conoscenza interna per documentare i processi di supporto, utilizzando Ansible e Terraform per l'automazione delle attività e la standardizzazione delle operazioni.<br>
Tecnologie: Ansible, Terraform<br>
Risultati: Riduzione del tempo di risoluzione delle richieste e maggiore efficienza nel supporto tecnico.<br><br>

<strong>Configurazione di Load Balancer HTTP(S)</strong><br>
Descrizione: Ho configurato load balancer regionali su Google Cloud per una distribuzione efficiente del traffico, ottimizzando l'esperienza utente e la resilienza dei servizi.<br>
Tecnologie: Google Cloud Platform, NGINX<br>
Risultati: Miglioramento della reattività delle applicazioni e maggiore disponibilità per i clienti.<br><br>

<strong>Migrazione del Database su Cloud SQL</strong><br>
Descrizione: Ho migrato un database PostgreSQL on-premise su Cloud SQL utilizzando il Database Migration Service, configurando anche la rete e le regole di firewall per garantire la sicurezza della migrazione.<br>
Tecnologie: Google Cloud, PostgreSQL<br>
Risultati: Migrazione sicura e senza interruzioni, con aumento dell'affidabilità del database.<br><br>

<strong>Gestione della Sicurezza e VPN</strong><br>
Descrizione: Ho implementato soluzioni per il monitoraggio della sicurezza e l'accesso VPN, assicurando la sicurezza dei dati e il controllo degli accessi.<br>
Tecnologie: Fortinet, Docker, Jenkins<br>
Risultati: Ambiente di rete più sicuro e monitorato, proteggendo dalle minacce esterne.`,
        
        tecnologias: `Infrastruttura e Cloud:
Kubernetes, Google Cloud Platform, AWS, Azure

Automazione e Gestione:
Ansible, Terraform, CI/CD con Docker e Jenkins

Sistemi Operativi e Reti:
Linux, Windows Server, Reti di Computer

Monitoraggio e Sicurezza:
Grafana, Zabbix, Fortinet Security, Sophos Firewall, UTM Stack, Elastic

Strumenti di Conformità e Sicurezza:
GDPR, VPN, Controllo degli Accessi, Logging Explorer`,

        cargos: `Specialista di ITOps presso Quero Educação
Periodo: 01/2019 - 08/2023
Responsabilità: Gestione dell'infrastruttura cloud, sviluppo di processi automatizzati, monitoraggio degli incidenti, e guida di progetti di supporto e sicurezza IT.

Amministratore di Sicurezza IT presso MeedBR
Periodo: 04/2024 - 08/2024
Responsabilità: Implementazione di politiche di sicurezza, conformità al GDPR, supporto agli utenti e sviluppo di pipeline CI/CD.

Consulente IT presso MR Consultoria
Periodo: 08/2020 - 09/2020
Responsabilità: Consulenza per infrastrutture IT, ottimizzazione dei processi e supporto alla rete.

Analista di Supporto IT presso Fundação Cultural Cassiano Ricardo
Periodo: 02/2018 - 01/2019
Responsabilità: Supporto all'infrastruttura di rete, configurazione dei sistemi e assistenza agli utenti.`,

        cursos: `Fortinet Certified Associate in Cybersecurity
Istituzione: Fortinet
Anno: 2024

Certificazione Microsoft Azure Fundamentals
Istituzione: Microsoft
Anno: 2020

Google Skills Boost
Istituzione: Google
Anno: 2024

ITIL v3 Fundamentals
Istituzione: Bradesco Foundation
Anno: 2019

Laurea in Reti di Computer
Istituzione: Universidade Anhembi Morumbi
Periodo: 2020 - 2022

Laurea in Analisi e Sviluppo di Sistemi
Istituzione: Fatec São José dos Campos
Periodo: 2015 - 2020`,

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
