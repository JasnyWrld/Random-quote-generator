const btnEl=document.getElementById('btn')
const quoteEl=document.getElementById('quote')
const author=document.getElementById('author')
const load=document.getElementById('load')

const apiUrl='https://api.quotable.io/random'

async function generateQuote(){
    try {
       quoteEl.innerText='Getting the Quote.....'
       author.innerText='Loading.....'
        btnEl.innerText=`Loading.....`
        btnEl.disabled=true
        const response= await fetch(apiUrl).then((res)=>res.json())
    quoteEl.innerText=response.content
    author.innerText=`- ${response.author}`
    btnEl.innerText=`Get a Quote`
    btnEl.disabled=false
    } catch (error) {
        quoteEl.innerText=`error, try again later`
        author.innerText='an error happened'
    }
    
}


btnEl.addEventListener('click', generateQuote)





