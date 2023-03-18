const fetch = require('./src/api');
const {fetchApi, gretings} = fetch

//gretings()

fetchApi('https://rickandmortyapi.com/api/character')
.then((res)=>
     {
        const results = res.results
     })


