console.log("pepe")
const myDuration= document.querySelector("#myInput");
myDuration.addEventListener('input', updateValue);

function updateValue(e) {
    const duration= e.target.value;  
    console.log(duration)
}


export const inputTime= (myDuration)=>{
    const films= getFilms;
    films.forEach((film) => {
        if(myDuration <= film.duration ){
        const listFilm = `
        <div class="flex relative">
            <img alt="harry potter poster" class="poster"
              src=${film.poster}>
            <div>
            <h1 class="title">${film.title}</h1>
            <h2 class="director"> Direct by: ${film.director} || Total Duration: ${film.duration}</h2>
            <p class="description">${film.description}</p>

        </div>
        `
         } app.innerHTML += listFilm; 
})} 
updateValue(inputTime)
