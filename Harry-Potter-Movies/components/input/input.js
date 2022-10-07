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
        <div class="container">
                <h3 class="title">${film.date}</h3>
                <div class="content">
                <a href="https://www.wizardingworld.com/" alt="wizarding world web">
                <div class="content-overlay"></div>
                <img class="content-image"" alt="harry potter poster"
                    src=${film.poster}>
                <div class="content-details fadeIn-bottom">
                    <h2 class="content-title"> ${film.title}</h2>
                    <h3 class="content-text"> Direct by: ${film.director} || Total Duration: ${film.duration}</h2>
                    <p class="content-text">${film.description}</p>
                </div>
                </a>
                </div>
                </div>
        `
          
        app.innerHTML += listFilm; 

    } 
     else {
    const notTime= `
     <h2> YOU DONT HAVE ENOUGH TIME !!</h2>
        `
      error.innerHTML = notTime;
     }     
})}