const list = document.querySelector('#app')

// Naming de funcion para llamarlo desde el app;
export const initFilms = () => {
    getFilms();
  }
  
// Declaramos una función asincrona -> necisitamos el async antes de los ()
export const getFilms = async () => {
  // Definimos el Try Catch para intentar recuperar los datos y sino capturar el error
  try {
    // Lanzar la petición -> await para guardarlos en la variable
    const responsePromiseFilm = await fetch('http://localhost:3000/movies');
    // Transformar los datos a un formato legible -> Json => await para tranformar los datos y almacenarlos
    const responseFilmToJson = await responsePromiseFilm.json();

    // Invocamos a la funcíon que mappea los datos recibidos
    return responseFilmToJson;
  } catch (error) {
    // Capturamos el error y lo sacamos por consola
    console.log(error)
  }
}
  
// Mapeamos la info de la Api con los datos que nosotros necesitamos
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
  
    

  
  