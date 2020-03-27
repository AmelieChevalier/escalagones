// JS for the hidden text in interieur.html page

document.addEventListener('DOMContentLoaded', function () {
    const cardHeader = document.querySelector('.box-header'); // querySelector takes a CSS selector in parameter
    console.log(cardHeader);
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