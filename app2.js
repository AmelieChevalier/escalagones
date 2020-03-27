// add the date of the day on the page with events



const d = new Date();

const date = document.body.querySelector(".date");

date.textContent = `${d.toLocaleDateString()}`; 

