const content = {
    en: {
        projects: "Projects",
        technologies: "Technologies",
        skills: "Hard Skills",
        softskills: "Soft Skills",
        roles: "Roles",
        certifications: "Certifications & Courses",
        project1: "Detailed information about Project 1 in English.",
        project2: "Detailed information about Project 2 in English.",
        project3: "Detailed information about Project 3 in English.",
        tech1: "Information about Technology 1 in English.",
        tech2: "Information about Technology 2 in English.",
        skill1: "Description of Skill 1 in English.",
        softskill1: "Description of Soft Skill 1 in English.",
        role1: "Description of Role 1 in English.",
        certification1: "Description of Certification 1 in English."
    },
    pt: {
        projects: "Projetos",
        technologies: "Tecnologias",
        skills: "Habilidades Técnicas",
        softskills: "Habilidades Interpessoais",
        roles: "Funções",
        certifications: "Certificações e Cursos",
        project1: "Informações detalhadas sobre o Projeto 1 em português.",
        project2: "Informações detalhadas sobre o Projeto 2 em português.",
        project3: "Informações detalhadas sobre o Projeto 3 em português.",
        tech1: "Informações sobre Tecnologia 1 em português.",
        tech2: "Informações sobre Tecnologia 2 em português.",
        skill1: "Descrição da Habilidade 1 em português.",
        softskill1: "Descrição da Habilidade Interpessoal 1 em português.",
        role1: "Descrição da Função 1 em português.",
        certification1: "Descrição da Certificação 1 em português."
    },
    it: {
        projects: "Progetti",
        technologies: "Tecnologie",
        skills: "Competenze Tecniche",
        softskills: "Competenze Trasversali",
        roles: "Ruoli",
        certifications: "Certificazioni e Corsi",
        project1: "Informazioni dettagliate sul Progetto 1 in italiano.",
        project2: "Informazioni dettagliate sul Progetto 2 in italiano.",
        project3: "Informazioni dettagliate sul Progetto 3 in italiano.",
        tech1: "Informazioni sulla Tecnologia 1 in italiano.",
        tech2: "Informazioni sulla Tecnologia 2 in italiano.",
        skill1: "Descrizione della Competenza 1 in italiano.",
        softskill1: "Descrizione della Competenza Trasversale 1 in italiano.",
        role1: "Descrizione del Ruolo 1 in italiano.",
        certification1: "Descrizione della Certificazione 1 in italiano."
    }
};

function changeLanguage(lang) {
    document.getElementById('projects-content').innerHTML = generateDropdown(lang, 'project');
    document.getElementById('technologies-content').innerHTML = generateDropdown(lang, 'tech');
    document.getElementById('skills-content').innerHTML = generateDropdown(lang, 'skill');
    document.getElementById('softskills-content').innerHTML = generateDropdown(lang, 'softskill');
    document.getElementById('roles-content').innerHTML = generateDropdown(lang, 'role');
    document.getElementById('certifications-content').innerHTML = generateDropdown(lang, 'certification');
}

function generateDropdown(lang, type) {
    return `
        <button class="dropdown-btn" onclick="toggleDropdown('${type}1')">${content[lang][type + '1']}</button>
        <div id="${type}1" class="dropdown-content">${content[lang][type + '1']}</div>
    `;
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
