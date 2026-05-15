const links = {
  email: "mailto:juliovdks@gmail.com",
  linkedIn: "https://www.linkedin.com/in/julio-cesar-de-faria-junior/",
  github: "https://github.com/juliocfj",
  credly: "https://www.credly.com/users/juliojr94",
  credential: "https://www.credential.net/profile/juliojr",
  cv: "Julio_Cesar_CV.pdf",
  whatsapp: {
    en: "https://wa.me/5512982473571?text=Hello%20Julio%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20an%20opportunity.",
    pt: "https://wa.me/5512982473571?text=Ol%C3%A1%20Julio%2C%20encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
    it: "https://wa.me/5512982473571?text=Ciao%20Julio%2C%20ho%20trovato%20il%20tuo%20portfolio%20e%20vorrei%20parlare%20di%20un%27opportunit%C3%A0."
  }
};

const translations = {
  en: {
    htmlLang: "en",
    metaTitle: "Julio Cesar de Faria Junior | Technical Portfolio",
    nav: {
      menu: "Open navigation",
      contact: "Contact",
      cv: "Download CV",
      sections: "Sections",
      close: "Close navigation"
    },
    hero: {
      eyebrow: "Remote international IT operations portfolio",
      title: "Julio Cesar de Faria Junior",
      subtitle: "IT Operations Specialist | Technical Support Engineer | Cloud & Systems Support",
      description:
        "IT professional with 7+ years of experience in technical support, infrastructure operations, cloud environments, monitoring, access management, and process automation. Experienced supporting 1,000+ users and working with Google Workspace, Microsoft 365, AWS, Azure, Google Cloud, Jira, UniFi, Zabbix, Grafana, Docker, Jenkins, and Terraform.",
      badges: ["Remote-ready", "International teams", "U.S. and EU time zones", "Based in Brazil"],
      buttons: {
        cv: "Download CV",
        whatsapp: "Send me a WhatsApp message",
        linkedIn: "LinkedIn",
        github: "GitHub",
        credly: "Credly"
      },
      metrics: {
        experience: "years of IT support and operations experience",
        users: "users supported across business environments",
        clouds: "cloud ecosystems: Google Cloud, AWS, and Azure"
      }
    },
    sectionIntro: {
      eyebrow: "Interactive portfolio",
      title: "Explore Julio's technical profile"
    },
    footer: "Built as a multilingual technical portfolio for remote and international IT opportunities.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      tools: "Tools",
      impact: "Impact / What this demonstrates",
      note: "Note",
      category: "Category",
      type: "Type",
      details: "Show details",
      hide: "Hide details",
      targetRoles: "Roles",
      contactDetails: "Contact details"
    },
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: "Professional Overview",
        type: "overview",
        content: [
          "I am an IT professional based in São José dos Campos, Brazil, with over 7 years of experience supporting users, systems, infrastructure, and cloud-based environments. My background combines technical support, IT operations, monitoring, access management, documentation, and automation.",
          "Throughout my career, I have worked closely with users, infrastructure teams, vendors, and technical stakeholders to solve incidents, improve operational visibility, and support stable IT environments.",
          "I am currently focused on growing into cloud support, systems administration, and platform support roles, especially in remote international teams where I can contribute with reliability, ownership, documentation, and continuous improvement."
        ]
      },
      {
        id: "what",
        label: "What I Do",
        title: "What I Do",
        type: "cards",
        cards: [
          ["Technical Support & Incident Management", "L1-L3 technical support, ticket triage, SLA follow-up, remote troubleshooting, user communication, root cause analysis, and escalation handling."],
          ["Cloud & Infrastructure Operations", "Operational experience across AWS, Azure, and Google Cloud environments, supporting cloud resources, monitoring routines, access management, documentation, and infrastructure reliability."],
          ["Systems Administration", "Windows Server, Linux, Active Directory, Microsoft 365, Google Workspace, endpoint support, remote access, permissions, onboarding/offboarding, and daily infrastructure operations."],
          ["Monitoring & Reliability", "Experience with monitoring and alerting tools such as Zabbix, Grafana, Datadog, cloud monitoring dashboards, incident visibility, and operational reporting."],
          ["Automation & DevOps Foundations", "Practical exposure to Terraform, Docker, Jenkins, GitHub, Bash, PowerShell, and process automation to improve support workflows and operational efficiency."]
        ]
      },
      {
        id: "projects",
        label: "Projects & Labs",
        title: "Projects & Labs",
        type: "projects",
        projects: [
          {
            title: "Google Cloud Monitoring & Operations Lab",
            category: "Cloud / Monitoring / Operations",
            labType: "Hands-on Lab",
            description:
              "Built a hands-on Google Cloud environment to practice cloud operations, monitoring, alerting, and infrastructure visibility. The lab simulates a real support scenario where cloud resources need to be monitored, documented, and reviewed from an operations perspective.",
            problem:
              "Cloud support and operations teams need visibility into infrastructure health, performance, and incidents. Without monitoring and clear documentation, troubleshooting becomes slower and less reliable.",
            solution:
              "Created a Google Cloud lab environment using basic cloud resources, monitoring dashboards, logs, alerts, and documentation. The goal was to practice how a support or operations professional would observe, troubleshoot, and document cloud infrastructure behavior.",
            tools: "Google Cloud Platform, Cloud Monitoring, Cloud Logging, Compute Engine, IAM, dashboards, alerts, documentation.",
            impact:
              "Demonstrates Google Cloud operational knowledge, monitoring and alerting concepts, IAM awareness, cloud troubleshooting mindset and documentation discipline."
          },
          {
            title: "Google Cloud IAM & Access Management Lab",
            category: "Cloud / IAM / Access",
            labType: "Hands-on Lab",
            description:
              "Created a Google Cloud IAM lab to practice user access management, roles, permissions, and least privilege principles in a cloud environment.",
            problem:
              "Incorrect permissions can create security risks, operational confusion, and access issues for users and teams.",
            solution:
              "Configured users, roles, permissions, and access scenarios inside Google Cloud, focusing on appropriate access and security-conscious operations.",
            tools: "Google Cloud IAM, Google Cloud Console, service accounts, roles, permissions, access policies.",
            impact:
              "Demonstrates IAM fundamentals, least privilege mindset, cloud access troubleshooting, and security-conscious operations."
          },
          {
            title: "Terraform Infrastructure as Code Lab on Google Cloud",
            category: "Cloud / IaC / Provisioning",
            labType: "Hands-on Lab",
            description:
              "Built a Terraform lab to practice provisioning basic Google Cloud resources using Infrastructure as Code principles.",
            problem:
              "Manual cloud configuration can be inconsistent, hard to document, and difficult to reproduce.",
            solution:
              "Used Terraform to define and provision basic Google Cloud resources, practicing providers, variables, state, plan/apply workflows, and infrastructure documentation.",
            tools: "Terraform, Google Cloud, GitHub, Linux, Infrastructure as Code.",
            impact:
              "Demonstrates Terraform fundamentals, Infrastructure as Code mindset, Google Cloud provisioning basics, Git-based documentation and foundation for cloud/platform growth.",
            note:
              "This was a hands-on learning lab designed to strengthen practical understanding of Infrastructure as Code and cloud provisioning workflows."
          },
          {
            title: "Docker + Jenkins CI/CD Learning Lab",
            category: "DevOps / CI/CD / Linux",
            labType: "Hands-on Lab",
            description:
              "Created a local CI/CD lab using Docker, Jenkins, GitHub, and Linux to understand pipeline structure, build automation, and deployment workflows.",
            problem:
              "Modern IT operations and cloud support roles often require understanding how applications are built, tested, and deployed, even when the role is not purely software engineering.",
            solution:
              "Set up a Jenkins environment, connected it to a GitHub repository, and practiced basic pipeline execution using Docker-based workloads.",
            tools: "Docker, Jenkins, GitHub, Linux, shell scripting.",
            impact:
              "Demonstrates CI/CD fundamentals, pipeline logic, Linux environment setup, Docker basics, and DevOps awareness for support and operations roles."
          },
          {
            title: "GLPI to Slack Notification Automation",
            category: "ITSM / Automation / Support",
            labType: "Workflow Automation",
            description:
              "Designed a workflow connecting GLPI ticket updates to Slack notifications to improve visibility for support teams and reduce missed updates.",
            problem:
              "Important tickets, incidents, or updates can be missed when teams rely only on manual ticket checks.",
            solution:
              "Used webhook-based notifications to send relevant ticket updates to Slack channels, improving support visibility and follow-up.",
            tools: "GLPI, Slack Webhooks, ITSM, automation, support workflow.",
            impact:
              "Improved awareness of support activity, reduced dependency on manual checking, and helped the team respond faster to relevant updates."
          }
        ]
      },
      {
        id: "gcp",
        label: "Google Cloud Labs",
        title: "Google Cloud Hands-on Labs",
        type: "cloud",
        intro:
          "I use Google Cloud labs to strengthen my practical knowledge in cloud support, monitoring, IAM, infrastructure provisioning, and operational troubleshooting. These labs are designed to simulate real-world support and operations scenarios, helping me connect my IT infrastructure background with cloud environments.",
        cards: [
          ["Google Cloud Monitoring Lab", "Cloud Monitoring, Cloud Logging, dashboards, alerts, troubleshooting."],
          ["Google Cloud IAM Lab", "Roles, permissions, least privilege, access troubleshooting, service accounts."],
          ["Terraform on Google Cloud", "Providers, resources, variables, state, plan/apply, reproducible infrastructure."],
          ["Compute Engine Operations", "VM provisioning, firewall rules, SSH access, basic Linux administration, operational documentation."],
          ["Cloud Support Scenario Documentation", "Incident notes, troubleshooting steps, root cause analysis, and support handover documentation."]
        ]
      },
      {
        id: "experience",
        label: "Experience",
        title: "Experience",
        type: "timeline",
        items: [
          ["Grupo CW Firpo", "IT Specialist", "Infrastructure operations, technical support, monitoring, backup routines, access control, documentation, vendor coordination, operational reporting, and systems maintenance."],
          ["MeedBR", "IT Security Administrator", "Security monitoring, VPN access, access control, incident response, GDPR/LGPD-aligned routines, and security tooling support."],
          ["Quero Educação", "ITOps / Cloud Support", "Supported 1,000+ users, worked with Jira, Google Workspace, Microsoft tools, GCP environments, monitoring, automation, network support, and cloud-related operations."],
          ["Fundação Cultural Cassiano Ricardo", "IT Support Analyst", "End-user support, Windows environments, Active Directory routines, local network support, remote assistance, and internal technical training."]
        ]
      },
      {
        id: "stack",
        label: "Tech Stack",
        title: "Tech Stack",
        type: "stack",
        groups: [
          ["Strong / Professional Use", ["Technical Support L1-L3", "Jira", "GLPI", "Microsoft 365", "Google Workspace", "Active Directory", "Windows Server", "Linux", "UniFi", "VPN", "Zabbix", "Grafana", "Documentation", "SLA / Incident Management", "Access Management"]],
          ["Cloud & DevOps Exposure", ["Google Cloud", "AWS", "Azure", "Terraform", "Docker", "Jenkins", "GitHub", "Cloud Monitoring", "IAM", "Bash", "PowerShell"]],
          ["Security & Monitoring", ["Fortinet", "VPN", "Wazuh", "Graylog", "Datadog", "Access Control", "Security Event Monitoring", "GDPR/LGPD routines"]]
        ]
      },
      {
        id: "certifications",
        label: "Certifications",
        title: "Certifications",
        type: "certifications",
        certs: ["Microsoft Certified: Azure Fundamentals", "SnowPro Platform Associate", "Fortinet Certified Associate in Cybersecurity", "Datadog Foundation"]
      },
      {
        id: "roles",
        label: "Target Roles",
        title: "Target Roles",
        type: "roles",
        intro:
          "I am currently focused on remote and international opportunities where I can combine technical support, infrastructure operations, cloud support, monitoring, documentation, and process improvement.",
        roles: ["Technical Support Engineer", "Cloud Support Engineer", "IT Operations Specialist", "Systems Administrator", "SaaS Support Engineer", "Infrastructure Support Analyst", "Service Desk / Service Delivery Analyst", "Platform Support Engineer", "Application Support Engineer"]
      },
      {
        id: "contact",
        label: "Contact",
        title: "Contact",
        type: "contact",
        text:
          "Open to remote international opportunities in Technical Support, Cloud Support, IT Operations, Systems Administration, and SaaS Support.",
        details: [
          ["Email", "juliovdks@gmail.com", links.email],
          ["WhatsApp", "+55 12 98247-3571", null],
          ["LinkedIn", "https://www.linkedin.com/in/julio-cesar-de-faria-junior/", links.linkedIn],
          ["GitHub", "https://github.com/juliocfj", links.github],
          ["Credly", "https://www.credly.com/users/juliojr94", links.credly],
          ["Credential.net", "https://www.credential.net/profile/juliojr", links.credential],
          ["Location", "São José dos Campos, Brazil", null],
          ["Availability", "Remote / International teams / U.S. and EU time zones", null]
        ],
        buttons: {
          whatsapp: "Send WhatsApp message",
          email: "Send email",
          linkedIn: "LinkedIn",
          github: "GitHub",
          cv: "Download CV"
        }
      }
    ]
  },
  pt: {
    htmlLang: "pt-BR",
    metaTitle: "Julio Cesar de Faria Junior | Portfólio Técnico",
    nav: { menu: "Abrir navegação", contact: "Contato", cv: "Baixar CV", sections: "Seções", close: "Fechar navegação" },
    hero: {
      eyebrow: "Portfólio de operações de TI para times internacionais remotos",
      title: "Julio Cesar de Faria Junior",
      subtitle: "Especialista em Operações de TI | Technical Support Engineer | Cloud & Systems Support",
      description:
        "Profissional de TI com mais de 7 anos de experiência em suporte técnico, operações de infraestrutura, ambientes cloud, monitoramento, gestão de acessos, documentação e automação de processos. Experiência no suporte a mais de 1.000 usuários e atuação com Google Workspace, Microsoft 365, AWS, Azure, Google Cloud, Jira, UniFi, Zabbix, Grafana, Docker, Jenkins e Terraform.",
      badges: ["Pronto para trabalho remoto", "Times internacionais", "Fusos dos EUA e Europa", "Baseado no Brasil"],
      buttons: { cv: "Baixar CV", whatsapp: "Enviar mensagem no WhatsApp", linkedIn: "LinkedIn", github: "GitHub", credly: "Credly" },
      metrics: {
        experience: "anos de experiência em suporte e operações de TI",
        users: "usuários atendidos em ambientes corporativos",
        clouds: "ecossistemas cloud: Google Cloud, AWS e Azure"
      }
    },
    sectionIntro: { eyebrow: "Portfólio interativo", title: "Explore o perfil técnico do Julio" },
    footer: "Criado como portfólio técnico multilíngue para oportunidades remotas e internacionais em TI.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      tools: "Ferramentas",
      impact: "Impacto / O que demonstra",
      note: "Nota",
      category: "Categoria",
      type: "Tipo",
      details: "Mostrar detalhes",
      hide: "Ocultar detalhes",
      targetRoles: "Vagas-alvo",
      contactDetails: "Dados de contato"
    },
    sections: [
      {
        id: "overview",
        label: "Visão Geral",
        title: "Visão Geral Profissional",
        type: "overview",
        content: [
          "Sou um profissional de TI baseado em São José dos Campos, Brasil, com mais de 7 anos de experiência no suporte a usuários, sistemas, infraestrutura e ambientes baseados em cloud. Minha trajetória combina suporte técnico, operações de TI, monitoramento, gestão de acessos, documentação e automação.",
          "Ao longo da minha carreira, trabalhei próximo a usuários, equipes de infraestrutura, fornecedores e stakeholders técnicos para resolver incidentes, melhorar a visibilidade operacional e apoiar ambientes de TI mais estáveis.",
          "Atualmente, meu foco é crescer em posições de Cloud Support, Systems Administration e Platform Support, especialmente em times internacionais remotos onde eu possa contribuir com confiabilidade, senso de dono, documentação e melhoria contínua."
        ]
      },
      {
        id: "what",
        label: "O Que Eu Faço",
        title: "O Que Eu Faço",
        type: "cards",
        cards: [
          ["Suporte Técnico & Gestão de Incidentes", "Suporte técnico L1-L3, triagem de chamados, acompanhamento de SLA, troubleshooting remoto, comunicação com usuários, análise de causa raiz e escalonamento."],
          ["Cloud & Operações de Infraestrutura", "Experiência operacional em ambientes AWS, Azure e Google Cloud, com suporte a recursos cloud, rotinas de monitoramento, gestão de acessos, documentação e confiabilidade de infraestrutura."],
          ["Administração de Sistemas", "Windows Server, Linux, Active Directory, Microsoft 365, Google Workspace, suporte a endpoints, acesso remoto, permissões, onboarding/offboarding e operações diárias de infraestrutura."],
          ["Monitoramento & Confiabilidade", "Experiência com ferramentas de monitoramento e alertas como Zabbix, Grafana, Datadog, dashboards de cloud monitoring, visibilidade de incidentes e relatórios operacionais."],
          ["Automação & Fundamentos de DevOps", "Exposição prática a Terraform, Docker, Jenkins, GitHub, Bash, PowerShell e automação de processos para melhorar fluxos de suporte e eficiência operacional."]
        ]
      },
      {
        id: "projects",
        label: "Projetos & Labs",
        title: "Projetos & Labs",
        type: "projects",
        projects: [
          {
            title: "Lab de Monitoramento & Operações em Google Cloud",
            category: "Cloud / Monitoramento / Operações",
            labType: "Lab prático",
            description:
              "Criei um ambiente prático em Google Cloud para estudar operações cloud, monitoramento, alertas e visibilidade de infraestrutura. O lab simula um cenário real de suporte em que recursos cloud precisam ser monitorados, documentados e analisados sob uma perspectiva operacional.",
            problem:
              "Times de Cloud Support e Operações precisam de visibilidade sobre saúde, desempenho e incidentes da infraestrutura. Sem monitoramento e documentação clara, o troubleshooting se torna mais lento e menos confiável.",
            solution:
              "Criei um ambiente de laboratório no Google Cloud usando recursos básicos de cloud, dashboards de monitoramento, logs, alertas e documentação. O objetivo foi praticar como um profissional de suporte ou operações observaria, analisaria e documentaria o comportamento da infraestrutura cloud.",
            tools: "Google Cloud Platform, Cloud Monitoring, Cloud Logging, Compute Engine, IAM, dashboards, alertas e documentação.",
            impact:
              "Demonstra conhecimento operacional em Google Cloud, conceitos de monitoramento e alertas, noções de IAM, mentalidade de troubleshooting em cloud e disciplina de documentação."
          },
          {
            title: "Lab de IAM & Gestão de Acessos em Google Cloud",
            category: "Cloud / IAM / Acessos",
            labType: "Lab prático",
            description:
              "Criei um lab de IAM no Google Cloud para praticar gestão de acessos, papéis, permissões e princípios de menor privilégio em ambiente cloud.",
            problem:
              "Permissões incorretas podem gerar riscos de segurança, confusão operacional e problemas de acesso para usuários e equipes.",
            solution:
              "Configurei usuários, papéis, permissões e cenários de acesso dentro do Google Cloud, com foco em acesso adequado e operações orientadas à segurança.",
            tools: "Google Cloud IAM, Google Cloud Console, service accounts, papéis, permissões e políticas de acesso.",
            impact:
              "Demonstra fundamentos de IAM, mentalidade de menor privilégio, troubleshooting de acessos em cloud e operações com consciência de segurança."
          },
          {
            title: "Lab de Infrastructure as Code com Terraform no Google Cloud",
            category: "Cloud / IaC / Provisionamento",
            labType: "Lab prático",
            description:
              "Criei um lab com Terraform para praticar o provisionamento de recursos básicos no Google Cloud usando princípios de Infrastructure as Code.",
            problem:
              "Configurações manuais em cloud podem ser inconsistentes, difíceis de documentar e difíceis de reproduzir.",
            solution:
              "Usei Terraform para definir e provisionar recursos básicos no Google Cloud, praticando providers, variáveis, state, fluxos de plan/apply e documentação de infraestrutura.",
            tools: "Terraform, Google Cloud, GitHub, Linux e Infrastructure as Code.",
            impact:
              "Demonstra fundamentos de Terraform, mentalidade de Infrastructure as Code, noções de provisionamento no Google Cloud, documentação baseada em Git e base para crescimento em cloud/platform.",
            note:
              "Este foi um lab prático de aprendizado criado para fortalecer minha compreensão de Infrastructure as Code e fluxos de provisionamento em cloud."
          },
          {
            title: "Lab de CI/CD com Docker + Jenkins",
            category: "DevOps / CI/CD / Linux",
            labType: "Lab prático",
            description:
              "Criei um lab local de CI/CD usando Docker, Jenkins, GitHub e Linux para entender estrutura de pipelines, automação de builds e fluxos de deploy.",
            problem:
              "Funções modernas de IT Operations e Cloud Support frequentemente exigem entendimento de como aplicações são construídas, testadas e implantadas, mesmo quando a vaga não é puramente de desenvolvimento.",
            solution:
              "Configurei um ambiente Jenkins, conectei a um repositório GitHub e pratiquei a execução básica de pipelines usando workloads baseados em Docker.",
            tools: "Docker, Jenkins, GitHub, Linux e shell scripting.",
            impact:
              "Demonstra fundamentos de CI/CD, lógica de pipeline, configuração de ambiente Linux, noções de Docker e visão DevOps aplicada a suporte e operações."
          },
          {
            title: "Automação de Notificações GLPI para Slack",
            category: "ITSM / Automação / Suporte",
            labType: "Automação de workflow",
            description:
              "Desenhei um fluxo conectando atualizações de chamados do GLPI a notificações no Slack para melhorar a visibilidade dos times de suporte e reduzir atualizações perdidas.",
            problem:
              "Chamados, incidentes ou atualizações importantes podem passar despercebidos quando os times dependem apenas de checagens manuais.",
            solution:
              "Usei notificações baseadas em webhooks para enviar atualizações relevantes de chamados para canais do Slack, melhorando a visibilidade e o acompanhamento do suporte.",
            tools: "GLPI, Slack Webhooks, ITSM, automação e fluxo de suporte.",
            impact:
              "Melhorou a visibilidade das atividades de suporte, reduziu a dependência de checagens manuais e ajudou o time a responder mais rapidamente a atualizações relevantes."
          }
        ]
      },
      {
        id: "gcp",
        label: "Labs em Google Cloud",
        title: "Labs Práticos em Google Cloud",
        type: "cloud",
        intro:
          "Uso labs em Google Cloud para fortalecer meu conhecimento prático em cloud support, monitoramento, IAM, provisionamento de infraestrutura e troubleshooting operacional. Esses labs foram criados para simular cenários reais de suporte e operações, conectando minha experiência em infraestrutura de TI com ambientes cloud.",
        cards: [
          ["Lab de Monitoramento em Google Cloud", "Cloud Monitoring, Cloud Logging, dashboards, alertas e troubleshooting."],
          ["Lab de IAM em Google Cloud", "Papéis, permissões, menor privilégio, troubleshooting de acesso e service accounts."],
          ["Terraform no Google Cloud", "Providers, recursos, variáveis, state, plan/apply e infraestrutura reproduzível."],
          ["Operações com Compute Engine", "Provisionamento de VMs, regras de firewall, acesso SSH, administração básica Linux e documentação operacional."],
          ["Documentação de Cenários de Cloud Support", "Notas de incidente, passos de troubleshooting, análise de causa raiz e handover técnico."]
        ]
      },
      {
        id: "experience",
        label: "Experiência",
        title: "Experiência",
        type: "timeline",
        items: [
          ["Grupo CW Firpo", "IT Specialist", "Operações de infraestrutura, suporte técnico, monitoramento, rotinas de backup, controle de acessos, documentação, coordenação com fornecedores, relatórios operacionais e manutenção de sistemas."],
          ["MeedBR", "IT Security Administrator", "Monitoramento de segurança, acesso VPN, controle de acessos, resposta a incidentes, rotinas alinhadas à GDPR/LGPD e suporte a ferramentas de segurança."],
          ["Quero Educação", "ITOps / Cloud Support", "Suporte a mais de 1.000 usuários, atuação com Jira, Google Workspace, ferramentas Microsoft, ambientes GCP, monitoramento, automação, suporte de rede e operações relacionadas a cloud."],
          ["Fundação Cultural Cassiano Ricardo", "IT Support Analyst", "Suporte a usuários finais, ambientes Windows, rotinas de Active Directory, suporte a redes locais, atendimento remoto e treinamento técnico interno."]
        ]
      },
      {
        id: "stack",
        label: "Stack Técnica",
        title: "Stack Técnica",
        type: "stack",
        groups: [
          ["Uso Forte / Profissional", ["Suporte Técnico L1-L3", "Jira", "GLPI", "Microsoft 365", "Google Workspace", "Active Directory", "Windows Server", "Linux", "UniFi", "VPN", "Zabbix", "Grafana", "documentação", "SLA / gestão de incidentes", "gestão de acessos"]],
          ["Exposição em Cloud & DevOps", ["Google Cloud", "AWS", "Azure", "Terraform", "Docker", "Jenkins", "GitHub", "Cloud Monitoring", "IAM", "Bash", "PowerShell"]],
          ["Segurança & Monitoramento", ["Fortinet", "VPN", "Wazuh", "Graylog", "Datadog", "controle de acessos", "monitoramento de eventos de segurança", "rotinas GDPR/LGPD"]]
        ]
      },
      { id: "certifications", label: "Certificações", title: "Certificações", type: "certifications", certs: ["Microsoft Certified: Azure Fundamentals", "SnowPro Platform Associate", "Fortinet Certified Associate in Cybersecurity", "Datadog Foundation"] },
      {
        id: "roles",
        label: "Vagas-Alvo",
        title: "Vagas-Alvo",
        type: "roles",
        intro:
          "Atualmente, meu foco está em oportunidades remotas e internacionais onde eu possa combinar suporte técnico, operações de infraestrutura, cloud support, monitoramento, documentação e melhoria de processos.",
        roles: ["Technical Support Engineer", "Cloud Support Engineer", "IT Operations Specialist", "Systems Administrator", "SaaS Support Engineer", "Infrastructure Support Analyst", "Service Desk / Service Delivery Analyst", "Platform Support Engineer", "Application Support Engineer"]
      },
      {
        id: "contact",
        label: "Contato",
        title: "Contato",
        type: "contact",
        text:
          "Aberto a oportunidades remotas internacionais em Technical Support, Cloud Support, IT Operations, Systems Administration e SaaS Support.",
        details: [
          ["Email", "juliovdks@gmail.com", links.email],
          ["WhatsApp", "+55 12 98247-3571", null],
          ["LinkedIn", "https://www.linkedin.com/in/julio-cesar-de-faria-junior/", links.linkedIn],
          ["GitHub", "https://github.com/juliocfj", links.github],
          ["Credly", "https://www.credly.com/users/juliojr94", links.credly],
          ["Credential.net", "https://www.credential.net/profile/juliojr", links.credential],
          ["Localização", "São José dos Campos, Brasil", null],
          ["Disponibilidade", "Remoto / times internacionais / fusos dos EUA e Europa", null]
        ],
        buttons: { whatsapp: "Enviar mensagem no WhatsApp", email: "Enviar e-mail", linkedIn: "LinkedIn", github: "GitHub", cv: "Baixar CV" }
      }
    ]
  },
  it: {
    htmlLang: "it",
    metaTitle: "Julio Cesar de Faria Junior | Portfolio Tecnico",
    nav: { menu: "Apri navigazione", contact: "Contatto", cv: "Scarica CV", sections: "Sezioni", close: "Chiudi navigazione" },
    hero: {
      eyebrow: "Portfolio IT operations per team internazionali remoti",
      title: "Julio Cesar de Faria Junior",
      subtitle: "Specialista in Operazioni IT | Technical Support Engineer | Cloud & Systems Support",
      description:
        "Professionista IT con oltre 7 anni di esperienza in supporto tecnico, operazioni infrastrutturali, ambienti cloud, monitoraggio, gestione degli accessi, documentazione e automazione dei processi. Esperienza nel supporto a oltre 1.000 utenti e utilizzo di Google Workspace, Microsoft 365, AWS, Azure, Google Cloud, Jira, UniFi, Zabbix, Grafana, Docker, Jenkins e Terraform.",
      badges: ["Pronto per il lavoro remoto", "Team internazionali", "Fusi orari USA ed Europa", "Basato in Brasile"],
      buttons: { cv: "Scarica CV", whatsapp: "Inviami un messaggio su WhatsApp", linkedIn: "LinkedIn", github: "GitHub", credly: "Credly" },
      metrics: {
        experience: "anni di esperienza in supporto e operations IT",
        users: "utenti supportati in ambienti aziendali",
        clouds: "ecosistemi cloud: Google Cloud, AWS e Azure"
      }
    },
    sectionIntro: { eyebrow: "Portfolio interattivo", title: "Esplora il profilo tecnico di Julio" },
    footer: "Creato come portfolio tecnico multilingue per opportunità IT remote e internazionali.",
    labels: {
      problem: "Problema",
      solution: "Soluzione",
      tools: "Strumenti",
      impact: "Impatto / Cosa dimostra",
      note: "Nota",
      category: "Categoria",
      type: "Tipo",
      details: "Mostra dettagli",
      hide: "Nascondi dettagli",
      targetRoles: "Ruoli target",
      contactDetails: "Dettagli di contatto"
    },
    sections: [
      {
        id: "overview",
        label: "Panoramica",
        title: "Panoramica Professionale",
        type: "overview",
        content: [
          "Sono un professionista IT con sede a São José dos Campos, Brasile, con oltre 7 anni di esperienza nel supporto a utenti, sistemi, infrastrutture e ambienti cloud. Il mio background combina supporto tecnico, operazioni IT, monitoraggio, gestione degli accessi, documentazione e automazione.",
          "Nel corso della mia carriera ho collaborato con utenti, team infrastrutturali, fornitori e stakeholder tecnici per risolvere incidenti, migliorare la visibilità operativa e supportare ambienti IT stabili.",
          "Attualmente mi sto concentrando sulla crescita in ruoli di Cloud Support, Systems Administration e Platform Support, specialmente in team internazionali remoti dove posso contribuire con affidabilità, ownership, documentazione e miglioramento continuo."
        ]
      },
      {
        id: "what",
        label: "Cosa Faccio",
        title: "Cosa Faccio",
        type: "cards",
        cards: [
          ["Supporto Tecnico & Gestione degli Incidenti", "Supporto tecnico L1-L3, triage dei ticket, follow-up degli SLA, troubleshooting remoto, comunicazione con gli utenti, analisi della causa radice ed escalation."],
          ["Cloud & Operazioni Infrastrutturali", "Esperienza operativa in ambienti AWS, Azure e Google Cloud, supportando risorse cloud, routine di monitoraggio, gestione degli accessi, documentazione e affidabilità infrastrutturale."],
          ["Amministrazione dei Sistemi", "Windows Server, Linux, Active Directory, Microsoft 365, Google Workspace, supporto endpoint, accesso remoto, permessi, onboarding/offboarding e operazioni infrastrutturali quotidiane."],
          ["Monitoraggio & Affidabilità", "Esperienza con strumenti di monitoraggio e alerting come Zabbix, Grafana, Datadog, dashboard di cloud monitoring, visibilità degli incidenti e report operativi."],
          ["Automazione & Fondamenti DevOps", "Esposizione pratica a Terraform, Docker, Jenkins, GitHub, Bash, PowerShell e automazione dei processi per migliorare i flussi di supporto e l'efficienza operativa."]
        ]
      },
      {
        id: "projects",
        label: "Progetti & Lab",
        title: "Progetti & Lab",
        type: "projects",
        projects: [
          {
            title: "Lab di Monitoraggio & Operazioni su Google Cloud",
            category: "Cloud / Monitoraggio / Operazioni",
            labType: "Lab pratico",
            description:
              "Ho creato un ambiente pratico in Google Cloud per esercitarmi in operazioni cloud, monitoraggio, alerting e visibilità infrastrutturale. Il lab simula uno scenario reale di supporto in cui le risorse cloud devono essere monitorate, documentate e analizzate da una prospettiva operativa.",
            problem:
              "I team di Cloud Support e Operations hanno bisogno di visibilità sulla salute, sulle performance e sugli incidenti dell'infrastruttura. Senza monitoraggio e documentazione chiara, il troubleshooting diventa più lento e meno affidabile.",
            solution:
              "Ho creato un ambiente di laboratorio su Google Cloud utilizzando risorse cloud di base, dashboard di monitoraggio, log, alert e documentazione. L'obiettivo era praticare come un professionista di supporto o operations osserva, analizza e documenta il comportamento dell'infrastruttura cloud.",
            tools: "Google Cloud Platform, Cloud Monitoring, Cloud Logging, Compute Engine, IAM, dashboard, alert e documentazione.",
            impact:
              "Dimostra conoscenza operativa di Google Cloud, concetti di monitoraggio e alerting, consapevolezza IAM, mentalità di troubleshooting cloud e disciplina nella documentazione."
          },
          {
            title: "Lab IAM & Gestione degli Accessi su Google Cloud",
            category: "Cloud / IAM / Accessi",
            labType: "Lab pratico",
            description:
              "Ho creato un lab IAM su Google Cloud per praticare la gestione degli accessi, ruoli, permessi e principi di least privilege in un ambiente cloud.",
            problem:
              "Permessi errati possono creare rischi di sicurezza, confusione operativa e problemi di accesso per utenti e team.",
            solution:
              "Ho configurato utenti, ruoli, permessi e scenari di accesso in Google Cloud, con attenzione all'accesso corretto e a operazioni orientate alla sicurezza.",
            tools: "Google Cloud IAM, Google Cloud Console, service account, ruoli, permessi e policy di accesso.",
            impact:
              "Dimostra fondamenti IAM, mentalità least privilege, troubleshooting degli accessi cloud e operations attente alla sicurezza."
          },
          {
            title: "Lab Infrastructure as Code con Terraform su Google Cloud",
            category: "Cloud / IaC / Provisioning",
            labType: "Lab pratico",
            description:
              "Ho creato un lab con Terraform per praticare il provisioning di risorse base su Google Cloud usando principi di Infrastructure as Code.",
            problem:
              "La configurazione manuale in cloud può essere inconsistente, difficile da documentare e difficile da riprodurre.",
            solution:
              "Ho usato Terraform per definire e creare risorse base su Google Cloud, praticando provider, variabili, state, workflow plan/apply e documentazione infrastrutturale.",
            tools: "Terraform, Google Cloud, GitHub, Linux e Infrastructure as Code.",
            impact:
              "Dimostra fondamenti Terraform, mentalità Infrastructure as Code, basi di provisioning su Google Cloud, documentazione basata su Git e fondazione per crescita in cloud/platform.",
            note:
              "Questo è stato un lab pratico di apprendimento progettato per rafforzare la comprensione di Infrastructure as Code e dei workflow di provisioning cloud."
          },
          {
            title: "Lab CI/CD con Docker + Jenkins",
            category: "DevOps / CI/CD / Linux",
            labType: "Lab pratico",
            description:
              "Ho creato un lab locale di CI/CD usando Docker, Jenkins, GitHub e Linux per comprendere la struttura delle pipeline, l'automazione dei build e i workflow di deploy.",
            problem:
              "I ruoli moderni di IT Operations e Cloud Support richiedono spesso la comprensione di come le applicazioni vengono costruite, testate e distribuite, anche quando il ruolo non è puramente software engineering.",
            solution:
              "Ho configurato un ambiente Jenkins, l'ho collegato a un repository GitHub e ho praticato l'esecuzione base di pipeline usando workload basati su Docker.",
            tools: "Docker, Jenkins, GitHub, Linux e shell scripting.",
            impact:
              "Dimostra fondamenti CI/CD, logica di pipeline, configurazione di ambienti Linux, basi Docker e consapevolezza DevOps per ruoli di supporto e operations."
          },
          {
            title: "Automazione Notifiche GLPI verso Slack",
            category: "ITSM / Automazione / Supporto",
            labType: "Automazione workflow",
            description:
              "Ho progettato un workflow che collega gli aggiornamenti dei ticket GLPI alle notifiche Slack per migliorare la visibilità dei team di supporto e ridurre aggiornamenti persi.",
            problem:
              "Ticket, incidenti o aggiornamenti importanti possono essere persi quando i team dipendono solo da controlli manuali.",
            solution:
              "Ho utilizzato notifiche basate su webhook per inviare aggiornamenti rilevanti dei ticket ai canali Slack, migliorando visibilità e follow-up del supporto.",
            tools: "GLPI, Slack Webhooks, ITSM, automazione e workflow di supporto.",
            impact:
              "Ha migliorato la consapevolezza delle attività di supporto, ridotto la dipendenza dai controlli manuali e aiutato il team a rispondere più rapidamente agli aggiornamenti rilevanti."
          }
        ]
      },
      {
        id: "gcp",
        label: "Lab in Google Cloud",
        title: "Lab Pratici su Google Cloud",
        type: "cloud",
        intro:
          "Uso lab su Google Cloud per rafforzare la mia conoscenza pratica in cloud support, monitoraggio, IAM, provisioning infrastrutturale e troubleshooting operativo. Questi lab sono progettati per simulare scenari reali di supporto e operations, aiutandomi a collegare il mio background in infrastruttura IT agli ambienti cloud.",
        cards: [
          ["Lab di Monitoraggio su Google Cloud", "Cloud Monitoring, Cloud Logging, dashboard, alert e troubleshooting."],
          ["Lab IAM su Google Cloud", "Ruoli, permessi, least privilege, troubleshooting degli accessi e service account."],
          ["Terraform su Google Cloud", "Provider, risorse, variabili, state, plan/apply e infrastruttura riproducibile."],
          ["Operazioni con Compute Engine", "Provisioning VM, regole firewall, accesso SSH, amministrazione Linux di base e documentazione operativa."],
          ["Documentazione Scenari Cloud Support", "Note sugli incidenti, passaggi di troubleshooting, root cause analysis e handover tecnico."]
        ]
      },
      {
        id: "experience",
        label: "Esperienza",
        title: "Esperienza",
        type: "timeline",
        items: [
          ["Grupo CW Firpo", "IT Specialist", "Operazioni infrastrutturali, supporto tecnico, monitoraggio, routine di backup, controllo degli accessi, documentazione, coordinamento con fornitori, report operativi e manutenzione dei sistemi."],
          ["MeedBR", "IT Security Administrator", "Monitoraggio della sicurezza, accesso VPN, controllo degli accessi, risposta agli incidenti, routine allineate a GDPR/LGPD e supporto a strumenti di sicurezza."],
          ["Quero Educação", "ITOps / Cloud Support", "Supporto a oltre 1.000 utenti, utilizzo di Jira, Google Workspace, strumenti Microsoft, ambienti GCP, monitoraggio, automazione, supporto di rete e operazioni legate al cloud."],
          ["Fundação Cultural Cassiano Ricardo", "IT Support Analyst", "Supporto agli utenti finali, ambienti Windows, routine Active Directory, supporto rete locale, assistenza remota e formazione tecnica interna."]
        ]
      },
      {
        id: "stack",
        label: "Stack Tecnico",
        title: "Stack Tecnico",
        type: "stack",
        groups: [
          ["Uso Forte / Professionale", ["Supporto Tecnico L1-L3", "Jira", "GLPI", "Microsoft 365", "Google Workspace", "Active Directory", "Windows Server", "Linux", "UniFi", "VPN", "Zabbix", "Grafana", "documentazione", "SLA / gestione incidenti", "gestione accessi"]],
          ["Esposizione Cloud & DevOps", ["Google Cloud", "AWS", "Azure", "Terraform", "Docker", "Jenkins", "GitHub", "Cloud Monitoring", "IAM", "Bash", "PowerShell"]],
          ["Sicurezza & Monitoraggio", ["Fortinet", "VPN", "Wazuh", "Graylog", "Datadog", "controllo accessi", "monitoraggio eventi di sicurezza", "routine GDPR/LGPD"]]
        ]
      },
      { id: "certifications", label: "Certificazioni", title: "Certificazioni", type: "certifications", certs: ["Microsoft Certified: Azure Fundamentals", "SnowPro Platform Associate", "Fortinet Certified Associate in Cybersecurity", "Datadog Foundation"] },
      {
        id: "roles",
        label: "Ruoli Target",
        title: "Ruoli Target",
        type: "roles",
        intro:
          "Attualmente mi sto concentrando su opportunità remote e internazionali dove posso combinare supporto tecnico, operazioni infrastrutturali, cloud support, monitoraggio, documentazione e miglioramento dei processi.",
        roles: ["Technical Support Engineer", "Cloud Support Engineer", "IT Operations Specialist", "Systems Administrator", "SaaS Support Engineer", "Infrastructure Support Analyst", "Service Desk / Service Delivery Analyst", "Platform Support Engineer", "Application Support Engineer"]
      },
      {
        id: "contact",
        label: "Contatto",
        title: "Contatto",
        type: "contact",
        text:
          "Aperto a opportunità remote internazionali in Technical Support, Cloud Support, IT Operations, Systems Administration e SaaS Support.",
        details: [
          ["Email", "juliovdks@gmail.com", links.email],
          ["WhatsApp", "+55 12 98247-3571", null],
          ["LinkedIn", "https://www.linkedin.com/in/julio-cesar-de-faria-junior/", links.linkedIn],
          ["GitHub", "https://github.com/juliocfj", links.github],
          ["Credly", "https://www.credly.com/users/juliojr94", links.credly],
          ["Credential.net", "https://www.credential.net/profile/juliojr", links.credential],
          ["Posizione", "São José dos Campos, Brasile", null],
          ["Disponibilità", "Remoto / team internazionali / fusi orari USA ed Europa", null]
        ],
        buttons: { whatsapp: "Inviami un messaggio su WhatsApp", email: "Invia email", linkedIn: "LinkedIn", github: "GitHub", cv: "Scarica CV" }
      }
    ]
  }
};

let selectedLanguage = "en";
let activeSectionId = "overview";
let openProjectIndex = 0;

const el = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

function createExternalButton(label, href, style = "ghost") {
  const a = document.createElement("a");
  a.className = `button ${style}`;
  a.href = href;
  a.textContent = label;
  if (href !== links.email && href !== links.cv) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  if (href === links.cv) a.download = "";
  return a;
}

function setLanguage(lang) {
  selectedLanguage = lang;
  document.documentElement.lang = translations[lang].htmlLang;
  document.title = translations[lang].metaTitle;
  openProjectIndex = 0;
  render();
}

function setActiveSection(id) {
  activeSectionId = id;
  openProjectIndex = 0;
  renderSections();
  renderActiveSection();
  byId("activeSection").scrollIntoView({ behavior: "smooth", block: "start" });
  closeMenu();
}

function closeMenu() {
  const nav = byId("headerNav");
  const toggle = el(".menu-toggle");
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

function renderHero(t) {
  byId("heroEyebrow").textContent = t.hero.eyebrow;
  byId("heroTitle").textContent = t.hero.title;
  byId("heroSubtitle").textContent = t.hero.subtitle;
  byId("heroDescription").textContent = t.hero.description;
  byId("metricExperience").textContent = t.hero.metrics.experience;
  byId("metricUsers").textContent = t.hero.metrics.users;
  byId("metricClouds").textContent = t.hero.metrics.clouds;

  const badges = byId("heroBadges");
  badges.replaceChildren(...t.hero.badges.map((badge) => {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = badge;
    return span;
  }));

  const actions = byId("heroActions");
  actions.replaceChildren(
    createExternalButton(t.hero.buttons.cv, links.cv, "primary"),
    createExternalButton(t.hero.buttons.whatsapp, links.whatsapp[selectedLanguage], "ghost"),
    createExternalButton(t.hero.buttons.linkedIn, links.linkedIn, "ghost"),
    createExternalButton(t.hero.buttons.github, links.github, "ghost"),
    createExternalButton(t.hero.buttons.credly, links.credly, "ghost")
  );
}

function renderHeader(t) {
  byId("headerContact").textContent = t.nav.contact;
  byId("headerContact").href = links.whatsapp[selectedLanguage];
  byId("headerCv").textContent = t.nav.cv;
  byId("headerCv").href = links.cv;

  const navLinks = byId("navLinks");
  const compactSections = t.sections.filter((section) => ["overview", "projects", "gcp", "experience", "stack", "contact"].includes(section.id));
  navLinks.replaceChildren(...compactSections.map((section) => {
    const button = document.createElement("button");
    button.className = `nav-link${section.id === activeSectionId ? " active" : ""}`;
    button.type = "button";
    button.textContent = section.label;
    button.addEventListener("click", () => setActiveSection(section.id));
    return button;
  }));

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === selectedLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const toggle = el(".menu-toggle");
  toggle.querySelector(".sr-only").textContent = t.nav.menu;
}

function renderSections() {
  const t = translations[selectedLanguage];
  byId("sectionsEyebrow").textContent = t.sectionIntro.eyebrow;
  byId("sectionsTitle").textContent = t.sectionIntro.title;
  const grid = byId("sectionGrid");
  grid.replaceChildren(...t.sections.map((section) => {
    const button = document.createElement("button");
    button.className = `section-card${section.id === activeSectionId ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-pressed", String(section.id === activeSectionId));
    button.innerHTML = `<strong>${section.label}</strong>`;
    button.addEventListener("click", () => setActiveSection(section.id));
    return button;
  }));
}

function paragraphBlock(items) {
  return items.map((text) => `<p class="section-copy">${text}</p>`).join("");
}

function renderInfoCards(cards, className = "content-grid") {
  return `<div class="${className}">${cards.map(([title, text]) => `
    <article class="info-card">
      <h3>${title}</h3>
      <p class="card-copy">${text}</p>
    </article>
  `).join("")}</div>`;
}

function renderProjects(section, labels) {
  return `<div class="project-grid">${section.projects.map((project, index) => `
    <button class="expand-card${index === openProjectIndex ? " open" : ""}" type="button" data-project="${index}" aria-expanded="${index === openProjectIndex}">
      <h3>${project.title}<span class="expand-icon" aria-hidden="true">${index === openProjectIndex ? "-" : "+"}</span></h3>
      <p class="card-copy">${project.description}</p>
      <div class="meta-row">
        <span class="meta-chip">${labels.category}: ${project.category}</span>
        <span class="meta-chip">${labels.type}: ${project.labType}</span>
      </div>
      <div class="expand-details">
        ${["problem", "solution", "tools", "impact", "note"].filter((key) => project[key]).map((key) => `
          <div class="detail-group">
            <strong>${labels[key]}</strong>
            <span>${project[key]}</span>
          </div>
        `).join("")}
      </div>
    </button>
  `).join("")}</div>`;
}

function renderTimeline(section) {
  return `<div class="timeline-grid">${section.items.map(([company, role, text]) => `
    <article class="timeline-card">
      <h3>${company} — ${role}</h3>
      <p>${text}</p>
    </article>
  `).join("")}</div>`;
}

function renderStack(section) {
  return `<div class="stack-grid">${section.groups.map(([title, items]) => `
    <article class="stack-card">
      <h3>${title}</h3>
      <ul class="tech-list">
        ${items.map((item) => `<li class="tech-badge">${item}</li>`).join("")}
      </ul>
    </article>
  `).join("")}</div>`;
}

function renderCertifications(section) {
  return `
    <div class="content-grid">
      <article class="info-card">
        <ul class="cert-list">
          ${section.certs.map((cert) => `<li class="tech-badge">${cert}</li>`).join("")}
        </ul>
      </article>
      <article class="info-card">
        <h3>Credential Profiles</h3>
        <div class="hero-actions">
          ${createButtonHtml("Credly", links.credly)}
          ${createButtonHtml("Credential.net", links.credential)}
        </div>
      </article>
    </div>`;
}

function createButtonHtml(label, href, style = "ghost") {
  const download = href === links.cv ? " download" : "";
  const external = href !== links.email && href !== links.cv ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a class="button ${style}" href="${href}"${external}${download}>${label}</a>`;
}

function renderRoles(section, labels) {
  return `
    <p class="section-copy">${section.intro}</p>
    <h3>${labels.targetRoles}</h3>
    <ul class="role-list role-grid">
      ${section.roles.map((role) => `<li class="tech-badge">${role}</li>`).join("")}
    </ul>`;
}

function renderContact(section) {
  return `
    <div class="contact-grid">
      <article class="contact-card">
        <p class="section-copy">${section.text}</p>
        <div class="hero-actions">
          ${createButtonHtml(section.buttons.whatsapp, links.whatsapp[selectedLanguage], "primary")}
          ${createButtonHtml(section.buttons.email, links.email)}
          ${createButtonHtml(section.buttons.linkedIn, links.linkedIn)}
          ${createButtonHtml(section.buttons.github, links.github)}
          ${createButtonHtml(section.buttons.cv, links.cv)}
        </div>
      </article>
      <article class="contact-card">
        <ul class="contact-list">
          ${section.details.map(([label, value, href]) => `
            <li class="contact-line"><strong>${label}:</strong> ${href ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>` : value}</li>
          `).join("")}
        </ul>
      </article>
    </div>`;
}

function renderActiveSection() {
  const t = translations[selectedLanguage];
  const section = t.sections.find((item) => item.id === activeSectionId) || t.sections[0];
  const active = byId("activeSection");
  let body = "";

  if (section.type === "overview") body = paragraphBlock(section.content);
  if (section.type === "cards") body = renderInfoCards(section.cards);
  if (section.type === "projects") body = renderProjects(section, t.labels);
  if (section.type === "cloud") body = `<p class="section-copy">${section.intro}</p>${renderInfoCards(section.cards, "cloud-grid")}`;
  if (section.type === "timeline") body = renderTimeline(section);
  if (section.type === "stack") body = renderStack(section);
  if (section.type === "certifications") body = renderCertifications(section);
  if (section.type === "roles") body = renderRoles(section, t.labels);
  if (section.type === "contact") body = renderContact(section);

  active.innerHTML = `<p class="eyebrow">${section.label}</p><h2>${section.title}</h2>${body}`;

  active.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.project);
      openProjectIndex = openProjectIndex === nextIndex ? -1 : nextIndex;
      renderActiveSection();
    });
  });
}

function render() {
  const t = translations[selectedLanguage];
  renderHeader(t);
  renderHero(t);
  renderSections();
  renderActiveSection();
  byId("footerText").textContent = t.footer;
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

el(".menu-toggle").addEventListener("click", () => {
  const nav = byId("headerNav");
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  el(".menu-toggle").setAttribute("aria-expanded", String(open));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

render();
