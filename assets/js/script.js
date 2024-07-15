const navMBicon = document.querySelector('#nav-mobile-icon');
navMBicon.addEventListener('change', () => {
    if(navMBicon.checked)
        document.querySelector('.navbar-mobile').style.animation = 'navMBslideIn 0.3s linear';
    else
        document.querySelector('.navbar-mobile').style.animationName = 'navMBslideOut 0.3s linear';
     
});