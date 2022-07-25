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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const nav = document.getElementById('navbar__list');
// sections global var
const sec = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function navegationBuilder  ()  {

    nav.innerHTML = "";
    // looping all over the sections
   for(section of sec) {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;  //I wanted to call custom  attribute called (nav)

        const items = document.createElement('li');

      items.innerHTML=`<a class="menu__link" data-nav="${sectionID}" href="#${sectionID}">${sectionDataNav}</a>`;
       
        nav.appendChild(items);

         //nav.insertAdjacentElement("beforeend",items);    (I can use it too)
    };

};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
navegationBuilder();

// Add class 'active' to section when near top of viewport


//Activat the section which is viewed
function viewActiveSection (part) {
    return part.getBoundingClientRect().top;
};



//implementating the actual function

function addAndRemoveActiveClass  () {
    for(part of sec) {
        const elem = viewActiveSection(part);

        function view()
         { return (elem < 150 && elem >= -150);};

if (! view())
{
    // I can use o  appear  this to show the back ground

    part.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

    part.classList.remove('your-active-class'); // remove active class whenwe continue scrolling
    
}
else{
    part.style.cssText = "background-color: #2A2A72"; // I can use o  appear  this to show the back ground
    part.classList.add('your-active-class');  // add active class if it is viewed
    
}
        
       
    };
};

window.addEventListener('scroll' ,addAndRemoveActiveClass);




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

//  when click go smoothly (scrolling) to the target we want (custom attribute (sectionID))

nav.addEventListener("click", (action) => {
    action.preventDefault();
    if (action.target.dataset.nav) {
      document.getElementById(`${action.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        location.hash = `${action.target.dataset.nav}`;
      }, 155);
    }
  });




