const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const links = document.querySelector('ul.links');

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const footer = document.querySelector('footer');
const footerLinks = document.querySelectorAll('footer a');
const projects = document.querySelectorAll('.project');

menu.addEventListener('click', () => {
    links.classList.add('nav-active')
});

close.addEventListener('click', () => {
    links.classList.remove('nav-active')
});

const darkTheme = () => {
    document.body.classList.add('dark');
    nav.classList.add('dark');
    navLinks.forEach(link => link.classList.add('dark'));
    footer.classList.add('dark');
    links.classList.add('dark');
    footerLinks.forEach(link => link.classList.add('dark'));
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => btn.style.color = 'rgb(210, 210, 210)');
    document.querySelectorAll('input, textarea').forEach(input => input.style.color = 'rgb(210, 210, 210)');
    document.querySelectorAll('.progress-bar').forEach(bar => bar.style.backgroundColor = 'rgb(49, 49, 49)');
    document.querySelectorAll('.menu div').forEach(div => div.style.backgroundColor = 'rgb(210, 210, 210)');
    document.querySelector('.contact-links').classList.add('dark');
    projects.forEach(project => {
        project.classList.add('project-dark');
    });
}

const lightTheme = () => {
    document.body.classList.remove('dark');
    nav.classList.remove('dark');
    navLinks.forEach(link => link.classList.remove('dark'));
    footer.classList.remove('dark');
    links.classList.remove('dark');
    footerLinks.forEach(link => link.classList.remove('dark'));
    document.querySelector('.contact-links').classList.remove('dark');
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => btn.style.color = '');
    document.querySelectorAll('input, textarea').forEach(input => input.style.color = '');
    document.querySelectorAll('.progress-bar').forEach(bar => bar.style.backgroundColor = '');
    document.querySelectorAll('.menu div').forEach(div => div.style.backgroundColor = '');
    projects.forEach(project => {
        project.classList.remove('project-dark');
    });
}

if (localStorage.getItem('theme') == 'dark') {
    darkTheme();
} else if (localStorage.getItem('theme') == 'light') {
    lightTheme();
}


const checkForThbeme = () => {
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

}

const changeTheme = () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkTheme();
    } else {
        localStorage.setItem('theme', 'light');
        lightTheme();
    }
}

window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector(".contact-links").style.transform = "translateX(0%)";
    } else {
        document.querySelector(".contact-links").style.transform = "translateX(-100%)";
    }
}