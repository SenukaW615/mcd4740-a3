/*
JavaScript for the header 
(From the CodeStitch "Floating Nav + Dropdown". Link:https://codestitch.app/app/dashboard/stitches/1530?nav=Top%20Dropdown) 
*/

// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }


/*
Fancybox JavaScript code to largen the images of the accommodation options. 
(Link: https://fancyapps.com/fancybox/)
*/
Fancybox.bind( "[data-fancybox]" );



/*
JavaScript to copy the hashtag of the hotel in the bottom of the footer
(clipboard.writeText, async, and await functionalities are found from MDN Web Docs
Link: https://developer.mozilla.org/en-US/docs/Web)
*/

//run the function copyToClipBoard when user clicks on the tag button
document.querySelector('#tag-button').addEventListener('click',copyToClipBoard);


//function that copies the hashtag of the hotel into the clipboard
async function copyToClipBoard(){
    try {
        await navigator.clipboard.writeText('#wongaibeachhotel');
        alert("Hashtag copied to clipboard!");
    } catch (error) {
        console.error("Failed to copy: ",error)
    }
}