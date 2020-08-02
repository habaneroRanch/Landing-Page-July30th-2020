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
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

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
        section.style.cssText = "background-color: rgb(233, 183, 109)";
        
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

        let inviewport = () => elementPosition < 250 && elementPosition >= -250;

        //revised "removeActive(section);""
        addActive(inviewport(), section);
    });
};

// Scroll to anchor ID using scrollTO event


/*function scrolling() {
    //a container for all the links
    const links= document.querySelectorAll('.navbar__menu');
    // per each link being worked on.
    links.forEach(link => {
        link.addEventListener('click', () =>{
            for(i= 0; i<sections ; i++){
                sections[i].addEventListener('click', href(link));
                
                
                

            };
            
        });
    });
};

scrolling();
*/
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to Anchor. adding an event listener to check for active class 
// upon active section of the viewport.
window.addEventListener('scroll', sectionInvoked);


// Scroll to section on link click

let sectionOne = document.getElementsById("Section 1");
let sectionTwo = document.getElementsById("Section 2");
let sectionThree = document.getElementsById("Section 3");
let sectionFour = document.getElementsById("Section 4");

/**sectionOne.addEventListener('click', (e)=> {
    document.documentElement.scrollTo(0, 200);
};*/




// Set sections as active
