const activeLink = window.location.pathname;
const navLink=document.querySelectorAll('nav .link a').forEach( link =>{
    if(link.href.includes(`${activeLink}`)){
        link.classList.add('active');
        
    }
})