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
            projetos: "Automazione e Deployment di Infrastruttura Cloud\n
Descrizione: Ho automatizzato e gestito l'infrastruttura su Google Cloud utilizzando Kubernetes e Terraform, creando ambienti scalabili e sicuri per un'ottimale gestione delle risorse e del traffico.
Tecnologie: Kubernetes, Terraform, GCP
Risultati: Riduzione dei costi operativi e miglioramento della scalabilità in risposta a picchi di traffico.\n

Sviluppo di una Base di Conoscenza Interna\n
Descrizione: Ho implementato una base di conoscenza interna per documentare i processi di supporto, utilizzando Ansible e Terraform per l'automazione delle attività e la standardizzazione delle operazioni.
Tecnologie: Ansible, Terraform
Risultati: Riduzione del tempo di risoluzione delle richieste e maggiore efficienza nel supporto tecnico.\n

Configurazione di Load Balancer HTTP(S)\n
Descrizione: Ho configurato load balancer regionali su Google Cloud per una distribuzione efficiente del traffico, ottimizzando l'esperienza utente e la resilienza dei servizi.
Tecnologie: Google Cloud Platform, NGINX
Risultati: Miglioramento della reattività delle applicazioni e maggiore disponibilità per i clienti.\n

Migrazione del Database su Cloud SQL\n
Descrizione: Ho migrato un database PostgreSQL on-premise su Cloud SQL utilizzando il Database Migration Service, configurando anche la rete e le regole di firewall per garantire la sicurezza della migrazione.
Tecnologie: Google Cloud, PostgreSQL
Risultati: Migrazione sicura e senza interruzioni, con aumento dell'affidabilità del database.\n

Gestione della Sicurezza e VPN\n
Descrizione: Ho implementato soluzioni per il monitoraggio della sicurezza e l'accesso VPN, assicurando la sicurezza dei dati e il controllo degli accessi.
Tecnologie: Fortinet, Docker, Jenkins
Risultati: Ambiente di rete più sicuro e monitorato, proteggendo dalle minacce esterne.",
            tecnologias: "Infrastruttura e Cloud:\n Kubernetes, Google Cloud Platform, AWS, Azure\n
Automazione e Gestione:\n Ansible, Terraform, CI/CD con Docker e Jenkins\n
Sistemi Operativi e Reti:\n Linux, Windows Server, Reti di Computer\n
Monitoraggio e Sicurezza:\n Grafana, Zabbix, Fortinet Security, Sophos Firewall, UTM Stack, Elastic\n
Strumenti di Conformità e Sicurezza:\n GDPR, VPN, Controllo degli Accessi, Logging Explorer",
            cargos: "Amministratore di Sicurezza IT presso MeedBR
Periodo: 04/2024 - 08/2024
Responsabilità: Implementazione di politiche di sicurezza, conformità al GDPR, supporto agli utenti e sviluppo di pipeline CI/CD.\n

Specialista di ITOps presso Quero Educação
Periodo: 01/2019 - 08/2023
Responsabilità: Gestione dell'infrastruttura cloud, sviluppo di processi automatizzati, monitoraggio degli incidenti, e guida di progetti di supporto e sicurezza IT.\n

Consulente IT presso MR Consultoria
Periodo: 08/2020 - 09/2020
Responsabilità: Consulenza per infrastrutture IT, ottimizzazione dei processi e supporto alla rete.\n

Analista di Supporto IT presso Fundação Cultural Cassiano Ricardo
Periodo: 02/2018 - 01/2019
Responsabilità: Supporto all'infrastruttura di rete, configurazione dei sistemi e assistenza agli utenti.\n",
            cursos: "Fortinet Certified Associate in Cybersecurity
Istituzione: Fortinet
Anno: 2024\n

Certificazione Microsoft Azure Fundamentals
Istituzione: Microsoft
Anno: 2020\n

Google Skills Boost
Istituzione: Google
Anno: 2024\n

ITIL v3 Fundamentals
Istituzione: Bradesco Foundation
Anno: 2019\n

Laurea in Reti di Computer
Istituzione: Universidade Anhembi Morumbi
Periodo: 2020 - 2022\n

Laurea in Analisi e Sviluppo di Sistemi
Istituzione: Fatec São José dos Campos
Periodo: 2015 - 2020\n
",
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
