document.getElementById('instagramIcon') .addEventListener('click' , openInstagram );
document.getElementById('linkedinIcon')  .addEventListener('click' , openLinkedin );
document.getElementById('instagramIcons') .addEventListener('click' , openInstagram);
document.getElementById('linkedinIcons') .addEventListener('click' , openLinkedin);

function openInstagram() {
  window.open('https://www.instagram.com/elta_shabani/', '_blank');
}
function openLinkedin() {
  window.open('https://www.instagram.com/elta_shabani/', '_blank');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    const topOffset = section.offsetTop - 100;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
}

function updateColorMode () {
  const body = document.body ;
  const currentTime = new Date().getHours();

  if(currentTime >= 6 && currentTime < 18) {
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
  } else{
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
  }
}

updateColorMode();

document.getElementById('contactLink').addEventListener('click' , openGmail);

function openGmail() {
  window.open('')
}

function sendEmail() {
  var userEmail = document.getElementById("userEmail").value;
  var mailtoLink = "mailto:elta.shabani@gmail.com" + userEmail;
  document.getElementById("contactLink").href = mailtoLink;
  
}

function onClickMenu(){
  var menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show'); 
 

}



function scrollToSection(sectionId) {
var targetSection = document.getElementById(sectionId);

targetSection.scrollIntoView({ behavior: 'smooth', block:'start' });

var sectionsToCloseMenu = ['home', 'about', 'services', 'contact'];
     
if (sectionsToCloseMenu.includes(sectionId)) {
  var menu = document.getElementById('mobile-menu');
    menu.classList.remove('show');
    
    
  
}



}

