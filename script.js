//Global Constants
const gifForm = document.querySelector('form')
const gifArea = document.querySelector('#gif-area')
const apikey = "ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu"
const limit = "9"
const rating = "g"

//api.giphy.com/v1/gifs/search
//http://hostname/endpoint?param1=value1&param2=value2
//key: ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu
//controls submit behavior
gifForm.addEventListener("submit", getResults)

async function getResults(event){
    event.preventDefault()

    gifInput = event.target.gifs
    gif = gifInput.value
    
    console.log(gifInput)
    console.log(gif)
    apiurl = "http://api.giphy.com/v1/gifs/search?api_key=ek2bpUjdCfswnYpGGyLQPHZsRMnkZZqu&q=" + gif + "&limit=" + limit + "&rating" + rating 
    
    console.log(apiurl)
    const response = await fetch(apiurl)
    const jsonResponse = await response.json();

    const data = jsonResponse.data;	
    
    console.log(data)
}