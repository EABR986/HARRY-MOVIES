import { getFilms } from "../gallery/gallery";


const myDuration= document.querySelector("#myInput");
myDuration.addEventListener('input', (e) => {
    const duration= e.target.value;  
    inputTime(duration)
});


export const inputTime= async (myDuration)=>{
    const films= await getFilms();
    const app = document.querySelector('#app');

    app.innerHTML = "";
    error.innerHTML = "";

    films.forEach((film) => {
        if (myDuration >= film.duration) {
            const filmItem = document.createElement("div");
            filmItem.innerHTML = ` 
                <div class="container">
                    <h3 class="title">${film.title}</h3>
                    <div class="content">
                        <a href="https://www.wizardingworld.com/" alt="wizarding world web">
                            <div class="content-overlay"></div>
                            <img class="content-image"" alt="harry potter poster"
                                src=${film.poster}>
                            <div class="content-details fadeIn-bottom">
                                <h2 class="content-title"> Release Date:${film.date} </h2>
                                <h3 class="content-text"> Direct by: ${film.director} || Total Duration: ${film.duration}</h2>
                                <p class="content-text">${film.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            app.innerHTML += filmItem.innerHTML; 
        }    
    })

    if (app.innerHTML === "") {
        const notTime= `<h2> YOU DONT HAVE ENOUGH TIME !!</h2>`;
        error.innerHTML = notTime;
    }
}