'use strict';


const buttonId = document.getElementById('toggle-theme');
buttonId.addEventListener("click", function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
});