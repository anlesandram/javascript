const fetchApi = async(url) =>{
    try{
        const res = await fetch(url)
        const data = await res.json()

       return data 
    }catch(error){
        console.log(error)
    }
}

const gretings = () => {
    console.log("hola mundo")
}

module.exports = {fetchApi,gretings}