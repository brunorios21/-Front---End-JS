
function visitedCountry() {
   let select  = document.getElementById('country-select');
   let selectCountry = select.options[select.selectedIndex].text;
   localStorage.setItem('lastCountry', selectCountry);
   updateCountry();
}

function updateCountry() {
   document.getElementById('last-visited').textContent = localStorage.getItem('lastCountry');
}

//window.onload = function() {}

document.addEventListener('DOMContentLoaded', () => {
   updateCountry();
   document.getElementById('btn-visited').addEventListener('click', visitedCountry);
});
