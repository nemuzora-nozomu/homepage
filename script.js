// Dark mode switch
document.querySelector('.darkmode-switch').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// The (not) secret button
const easterEggActivator = document.querySelector('.warning');
const easterEggDeactivator = document.querySelector('.easter');
const theme = document.querySelector('#site-design');

easterEggActivator.addEventListener('click', () => {
    theme.href = 'styles-easter.css';
})
easterEggDeactivator.addEventListener('click', () => {
    theme.href = 'styles.css';
})
