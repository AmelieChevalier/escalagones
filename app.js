$(document).ready(function () {
    $('.btn-navigation').click(function () {
        $(this).find('.barre').toggleClass('white');
        $('.nav-bar-escalade').toggleClass('isOpen');

    });
});

// Open alert when submit form

function congrats() {
    alert("Merci pour votre message ! Nous reviendrons vers vous au plus vite !")
};


// add the date of the day on the page with events

/* const d = new Date();

const date = document.body.querySelector(".date");

date.textContent = `${d.toLocaleDateString()}`; */


// JS for the hidden text in interieur.html page

document.addEventListener('DOMContentLoaded', function () {
    const cardHeader = document.querySelector('.box-header'); // querySelector takes a CSS selector in parameter
    cardHeader.addEventListener('click', function () {
        // retrieving the DOM elements that we are going to play with...
        const titleElement = document.querySelector('.box-header h3');
        const boxBodyElement = document.querySelector('.box-body');
        const boxBodyClassAttribute = boxBodyElement.className;
        const boxBodyClassesArray = boxBodyClassAttribute.split(' ');
        // this gives either ['box-body', 'collapsed'] 
        // or just ['box-body'] if the box is not in a collapsed state
        const boxBodyIsCollapsed = boxBodyClassesArray.indexOf('collapsed') !== -1;
        // The indexOf method returns the index of the element matching its parameter
        // or -1 if the array does not contain the latter

        if (boxBodyIsCollapsed) {
            // switch to uncollapsed state
            titleElement.innerHTML = 'Masquer la liste des salles';
            boxBodyElement.className = 'box-body';
        } else { // it's not collapsed
            // switch to collapsed state 
            titleElement.innerHTML = 'Voir la liste des salles';
            boxBodyElement.className = 'box-body collapsed';
        }
    });
})