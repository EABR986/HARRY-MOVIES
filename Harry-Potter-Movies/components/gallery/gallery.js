

export const initFilms = () => {
    getFilms();
  }
  

export const getFilms = async () => {

  try {
   
    const responsePromiseFilm = await fetch('http://localhost:3000/movies');
    const responseFilmToJson = await responsePromiseFilm.json();
    return responseFilmToJson;
  } catch (error) {
    console.log(error)
  }
}
  

const tranformFilms = (films) => {
  let elementsTransformed = films.map((film) => {
    return {
      id: film.id,
      date: film.date,
      title:film.title,
      director: film.dierctor,
      description: film.description,
      poster: film.poster,
      duration: film.duration,
      
    }
  })}
  
    

  
  