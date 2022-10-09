import { displayFilms, getFilms } from "../gallery/gallery";

const myDuration= document.querySelector("#myInput");
myDuration.addEventListener('input', async (e) => {
    const duration= e.target.value;  
    const films= await getFilms();
    displayFilms(films, duration);
});