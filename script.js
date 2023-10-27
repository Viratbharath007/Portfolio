document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); 

    // Add a click event listener to each section
    sections.forEach(section => {
        section.addEventListener('click', function() {
            toggleBackground(this); 
        });
    });

    function toggleBackground(section) {
        const currentColor = section.style.backgroundColor || getComputedStyle(section).backgroundColor;

        if (currentColor === 'rgb(255, 255, 255)') {
            section.style.backgroundColor = '#009688';
            section.style.backgroundColor = 'white'; 
        }
    }
});
