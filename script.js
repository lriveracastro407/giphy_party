//Global Constants
const gifForm = document.querySelector('form')
const gifArea = document.querySelector('#gif-area')
const search = document.querySelector('#gifs')
const apikey = "ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu"
const limit = "9"
const rating = "g"
const load = document.querySelector('.hidden')
var pageNum = 0;
var offset = 0;
//api.giphy.com/v1/gifs/search
//http://hostname/endpoint?param1=value1&param2=value2
//key: ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu

//controls submit behavior
gifForm.addEventListener("submit", handleFormSubmit)
load.addEventListener('submit', showMore)

async function getResults(){    
    const input = search.value    
    //fetch data from API and store it in "data"
    apiurl = 'http://api.giphy.com/v1/gifs/search?api_key=ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu&q=' + input + '&limit=' + limit + '&rating' + rating 
    const response = await fetch(apiurl)
    const jsonResponse = await response.json();
    const data = jsonResponse.data;	
    
    displayResults(data)
}

const displayResults = (data) => {
    data.forEach(element => {
    gifArea.innerHTML += `
    <img src="${element.images.fixed_height.url}" alt="${element.title}" />
    `
    });
            
}

function handleFormSubmit(event) {
    event.preventDefault()
    gifArea.innerHTML = "" //clears gifarea
    getResults() //finds the called results
    
    search.value = "" //clears search bar after each search
    
    if (load.classList.contains('hidden')) {
        load.classList.remove('hidden')
      } //else {
        //load.classList.add('hidden')
      //}
}
function showMore(event) {
    event.preventDefault()
    getResults()
}