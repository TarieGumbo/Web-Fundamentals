// header toggle


// JS to move the nav bar, (for different screen sizes)
let mobMenu = document.getElementById('mobMenu')

mobMenu.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa fa-remove')
})
// JS for typing animation(referenced in index.html)
let typed = new Typed('.auto-input',{
    strings:['Artist.', 'Web Dev Learner.', 'Designer.','Student.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})