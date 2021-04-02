const getJokes= async () =>{
    try{
        const config = {headers:{Accept:'application/json'}}
        const res= await axios.get(`https://icanhazdadjoke.com/`, config)
        let yourJoke= res.data.joke
        document.querySelector("h2").innerHTML= yourJoke
    } catch (e){
        document.querySelector("h2").innerHTML= "No jokes available right now!"
        console.log(e)
    }
    
}
getJokes()