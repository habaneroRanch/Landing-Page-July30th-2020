/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global variables
const navigation = document.getElementById('navbar__list');
// sections global variables
const sections = document.querySelectorAll('section');
//anchor
const a = document.querySelector('navbar__menu');

/**
 * End Global Variables
 * Start Helper Functions
 * 

/* I'm having trouble hiding the navbar, as learned from w3schools https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */
/* function hideDiv() {
    navigation.style.visibility="hidden";
}
window.setTimeout(3000, hideDiv());
*/
/*
let prevScrollpos = window.pageYOffset; {

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar__menu").style.top = "0";
  } else {
    document.getElementById("navbar__menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
window.onscroll = function() {prevScrollpos()};
 */  
 /*
I'm having trouble hiding the navbar, as learned from w3schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button:
const mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.body.scrollTop > 20) {
    mybutton.style.display = "inline";
  } else {
    mybutton.style.display = "none";
  };
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
window.onscroll = function() {scrollFunction()};
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Navigation is built dynamically as an unordered list.
function navBuild() {
    //looping over all sections
    let navUI = '';
    //sections 1, 2, 3, and 4
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        //Use of template literals
        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
        
    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;
    
};

navBuild();
// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the viewpoint number
function position (section) {
    return Math.floor(section.getBoundingClientRect().top);

};
//removing the active class, revised function is implemented.
/*function removeActive (section) {
    section.classList.remove('your-active-class');
    //Must revert back to original background color when the section is not being viewed.
    section.style.cssText = "background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};*/
// adding the active class
function addActive(conditional, section) {
    if (conditional) {

        section.classList.add('your-active-class');
        //Adding a change in background color to the active section.
        section.style.cssText = "background-color: rgb(0, 155, 155)";
        
        } else {
            section.classList.remove('your-active-class');
            //Must revert back to original background color when the section is not being viewed.
            section.style.cssText = "background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
        };

};
//Section Active State
function sectionInvoked() {
    sections.forEach(section => {
        const elementPosition = position(section);

        let inviewport = () => elementPosition < 250 && elementPosition >= -1000;

        //revised "removeActive(section);""
        addActive(inviewport(), section);
    });
};

// Scroll to anchor ID using scrollTO event
function scrollTo(clicked){
    clicked.scrollIntoView(sectionInvoked);
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to Anchor. adding an event listener to check for active class 
// upon active section of the viewport.
window.addEventListener('scroll', sectionInvoked);
