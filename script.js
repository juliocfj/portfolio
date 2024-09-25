function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showContent(contentId) {
    const hiddenContents = document.querySelectorAll('.hidden-content');
    hiddenContents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(contentId).style.display = 'block';
}
