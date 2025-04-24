function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
function startPortfolio() {
    const preloader = document.getElementById('preloader');
    const welcome = document.getElementById('welcome-text');
    const audio = document.getElementById('transition-sound'); // Corrected ID
    setTimeout(() => {
        preloader.classList.add('hidden');
        welcome.style.display = 'block';
        audio.play();
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 3000);
    }, 2000);
    typeWriter();
}
const text = "Rajveer Kushwaha – Cyber Security Portfolio";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}