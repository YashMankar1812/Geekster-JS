// document.getElementById("toggleSwitch").addEventListener("change", () => {
//     const hTag = document.querySelector("h1");
//     const bodyTag = document.body;
//     const circle = document.getElementById("circle");


//     const isToggled = bodyTag.classList.toggle("bck-color-black");
//     hTag.classList.toggle("color-white", isToggled);
//     circle.classList.toggle("dark-mode", isToggled);
// });




document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }
    
    // Listen for toggle changes
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Watch for system theme changes
    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.setAttribute('data-theme', 'dark');
                toggle.checked = true;
            } else {
                document.body.removeAttribute('data-theme');
                toggle.checked = false;
            }
        }
    });
});