const API_KEY = '14127c00';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let currentSearch = '';

function fetchMovies(query, page = 1) {
    fetch(`${API_URL}s=${query}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
            pagination(data.totalResults);
        })
        .catch(error => console.error('Error fetching movies:', error));
}

function fetchMovies(query, page = 1) {
    fetch(`${API_URL}s=${query}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            const movies = data.Search;
            if (movies) {
                // Fetch additional details for each movie
                const movieDetailsPromises = movies.map(movie => 
                    fetch(`${API_URL}i=${movie.imdbID}`)
                    .then(response => response.json())
                );
                
                Promise.all(movieDetailsPromises)
                    .then(detailsArray => {
                        displayMovies(detailsArray);
                    });
            } else {
                moviesContainer.innerHTML = '<p>No movies found</p>';
            }
        })
        .catch(error => console.error('Error fetching movies:', error));
}


function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    if (movies) {
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
                <div class="movie-details">
                    <h3 class="movie-title">${movie.Title}</h3>
                    <p class="movie-year">${movie.Year}</p>
                    <div class="movie-ratings">
                    <p class="rating-imdb">IMDB:  <strong>${movie.Ratings[0].Value}</p></strong>
                </div>
                    <p class="movie-genre">${movie.Genre}</p>
                    <button class="view-details-btn">${ViewDetails}</button>
                    </div>
            `;
        });
    } else {
        moviesContainer.innerHTML = '<p>No movies found</p>';
    }
}


function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

searchInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.trim();
    if (query) {
        currentSearch = query;
        currentPage = 1;
        fetchMovies(query, currentPage);
    } else {
        moviesContainer.innerHTML = '';
        pagination.innerHTML = '';
    }
}, 300));

// on click on ViewDetails button show card of detail 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-details-btn')) {
        const movieDetailsCard = document.createElement('div');
        movieDetailsCard.classList.add('movie-details-card');
        const movieTitle = e.target.closest('.movie-card').querySelector('.movie-title').textContent;
        const movieYear = e.target.closest('.movie-card').querySelector('.movie-year').textContent;
        const movieRatings = e.target.closest('.movie-card').querySelector('.rating-imdb').textContent;
        const movieGenre = e.target.closest('.movie-card').querySelector('.movie-genre').textContent;
        movieDetailsCard.innerHTML = `
            <h2>${movieTitle}</h2>
            <p>Year: ${movieYear}</p>
            <p>Ratings: ${movieRatings}</p>
            <p>Genre: ${movieGenre}</p>
            <button class="close-btn">Close</button>
            `;
        document.body.appendChild(movieDetailsCard);
        movieDetailsCard.querySelector('.close-btn').addEventListener('click', () => {
            movieDetailsCard.remove();
        });
        e.preventDefault();
        // fetch more details and display them here
        fetch(`${API_URL}i=${e.target.closest('.movie-card').dataset.imdbid}`)
           .then(response => response.json())
           .then(details => {
                console.log(details);
                // display more details here
            });
    }
});









// on clicking on view button show div 


