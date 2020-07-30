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

// navigation builder
const navBuild = () => {
    //looping over all sections
    let navUI = '';
    //sections 1, 2, 3, and 4
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += '<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>';
         
        //personal note: '<li><a class= "menu__link" href= "#${sectionID}"> ${sectionDataNav} </a></li>'; 

    });
    // append all elements to the navigation
    navigation.innerHTML = navUL;

};

navBuild();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


