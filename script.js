window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 500);
    });

    // Add slide-up animation to images
    const images = document.querySelectorAll('img');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('slide-up');
        }, index * 300);
    });
});
