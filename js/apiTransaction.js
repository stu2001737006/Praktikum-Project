//intial values
const API_KEY = 'db58a02dcc5f34bb2e8039ebb230691d';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=db58a02dcc5f34bb2e8039ebb230691d';

function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}api_key=db58a02dcc5f34bb2e8039ebb230691d`;
    return url;
}  


function requestMovies(url, onComlete, onError){
    fetch(url)
        .then((res) => res.json())
        .then(onComlete)
        .catch(onError);
}

function searchMovie(value){
    const path = '/search/movie?';
    const url = generateUrl(path) + '&query=' + value;

    requestMovies(url, renderSearchMovies, handleError);
}

function getUpcomingMovies(){
    const path = '/movie/upcoming?';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Тренд филми'});
    requestMovies(url, render, handleError);
}

function getTopRatedMovies(){
    const path = '/movie/top_rated?';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Филми с най-висок рейтинг'});
    requestMovies(url, render, handleError);
}

function getPopularMovies(){
    const path = '/movie/popular?';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Популярни филми'});
    requestMovies(url, render, handleError);
}

function get2020Movies(){
    const path = '/discover/movie?year=2020&';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Филми от 2020'});
    requestMovies(url, render, handleError);
}

function get2019Movies(){
    const path = '/discover/movie?year=2019&';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Филми от 2019'});
    requestMovies(url, render, handleError);
}

function get2018Movies(){
    const path = '/discover/movie?year=2018&';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Филми от 2018'});
    requestMovies(url, render, handleError);
}

function get2017Movies(){
    const path = '/discover/movie?year=2017&';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Филми от 2017'});
    requestMovies(url, render, handleError);
}