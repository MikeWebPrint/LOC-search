var searchForm = document.querySelector('#search-form')
var searchInput = document.querySelector('#search-input')
var formatInput = document.querySelector('#format-input')


var getLOCinfo = function (topic, format) {
    var apiUrl = 'https://www.loc.gov/search/'+ format+'/'+'?q='+ topic + '&fo=json';
  
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayTopics(data.items, language);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };

searchForm.addEventListener('submit', getLOCinfo);