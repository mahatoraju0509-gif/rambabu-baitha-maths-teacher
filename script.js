window.addEventListener('load',()=>{document.getElementById('preloader').classList.add('hide')});

const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>50)});

const navLinks=document.querySelectorAll('.nav-links a');
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
    let current='';
    sections.forEach(section=>{
        const top=section.offsetTop-120;
        if(window.scrollY>=top) current=section.id;
    });
    navLinks.forEach(link=>{
        link.classList.toggle('active',link.getAttribute('href')==='#'+current);
    });
});

const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    menuToggle.innerHTML=nav.classList.contains('open')?'<i class="fas fa-times"></i>':'<i class="fas fa-bars"></i>';
});
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click',()=>{
        nav.classList.remove('open');
        menuToggle.innerHTML='<i class="fas fa-bars"></i>';
    });
});

const themeToggle=document.getElementById('themeToggle');
const body=document.body;
if(localStorage.getItem('rambabuTheme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fas fa-sun"></i>';}
themeToggle.addEventListener('click',()=>{
    body.classList.toggle('dark');
    const isDark=body.classList.contains('dark');
    localStorage.setItem('rambabuTheme',isDark?'dark':'light');
    themeToggle.innerHTML=isDark?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
});

const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{backToTop.classList.toggle('visible',window.scrollY>500)});
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

document.getElementById('contactForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('✅ Thank you! Your message has been sent successfully.');
    e.target.reset();
});

new Typed('.typing-text',{
    strings:['रामबाबु','Rambabu','बैठा','Baitha','सर','Sir'],
    typeSpeed:100,
    backSpeed:50,
    loop:true
});

new Typed('.typing-subtitle',{
    strings:['Mathematics Teacher | गणित शिक्षक','15+ Years Experience','M.Ed. Mathematics (TU)'],
    typeSpeed:80,
    backSpeed:40,
    loop:true
});

document.querySelectorAll('.about-card, .edu-card, .timeline-item, .skill-card, .contact-item').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(30px)';
    el.style.transition='opacity 0.6s ease, transform 0.6s ease';
});
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity='1';
            entry.target.style.transform='translateY(0)';
        }
    });
},{threshold:0.1});
document.querySelectorAll('.about-card, .edu-card, .timeline-item, .skill-card, .contact-item').forEach(el=>observer.observe(el));

console.log('✅ Rambabu Portfolio Loaded!');
console.log('🚀 Premium Value: 15 Lakh+');
