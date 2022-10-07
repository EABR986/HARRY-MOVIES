import { getFilms } from "../gallery/gallery";

const myDuration= document.querySelector("#myInput");
myDuration.addEventListener('input', (e) => {
    const duration= e.target.value;  
    inputTime(duration)
});


export const inputTime= async (myDuration)=>{
    const films= await getFilms();

    app.innerHTML = "";
    films.forEach((film) => {
        
    if(myDuration >= film.duration ) {
        
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
        app.innerHTML += listFilm; 

    } 
         
})} 
