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
            filmItem.classList.add("container");
            filmItem.innerHTML = ` 
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
                <div class="responsive-buttons">
                    <button class="more-info">+ info</button>
                    <button class="close-info hide">Close info</button>
                </div>
            `;
            
            const content = filmItem.querySelector(".content");

            content.addEventListener("mouseover",() => {
              content.classList.add("hover");
            });
            content.addEventListener("mouseout",() => {
                content.classList.remove("hover");
            });
            
            const button = filmItem.querySelector(".more-info");

            const closeButton = filmItem.querySelector(".close-info");

            button.addEventListener("click",() => {
                content.classList.add("hover");
                button.classList.add("hide");
                closeButton.classList.remove("hide");
            });
             closeButton.addEventListener("click",() => {
                content.classList.remove("hover");
                button.classList.remove("hide");
                closeButton.classList.add("hide");
            });
  
            app.appendChild(filmItem);
        }    
    })

    if (app.innerHTML === "") {
        const notTime= `<h2> YOU DONT HAVE ENOUGH TIME !!</h2>`;
        error.innerHTML = notTime;
    }
}