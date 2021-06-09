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

async function getResults(event){
    //page won't refresh when input is submitted
    //event.preventDefault()
    //search input in a string
    //gifInput = event.target.gifs
    //gif = gifInput.value
    const input = search.value
    //console.log(gifInput)
    //console.log(gif)
    //fetch data from API and store it in "data"
    apiurl = 'http://api.giphy.com/v1/gifs/search?api_key=ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu&q=' + input + '&limit=' + limit + '&rating' + rating 
    console.log(apiurl)
    const response = await fetch(apiurl)
    const jsonResponse = await response.json();
    const data = jsonResponse.data;	
    console.log(limit)
    console.log(data)
    console.log(data[0].url)

    displayResults(data)
}

const displayResults = (data) => {
    data.forEach(element => {
    console.log(element.url)
    gifArea.innerHTML += `
    <img src="${element.images.fixed_height.url}" alt="${element.title}" />
    `
});
            
}
function handleFormSubmit(event) {
    event.preventDefault()
    gifArea.innerHTML = ""
    getResults()
    search.value = ""

}
function showMore() {

}